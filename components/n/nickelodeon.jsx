import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z917-eb4n.css';

const viewBox = {"width":1000,"height":163.38};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z917-eb4n"/>`,
		"fallback": "thesvg-color:nickelodeon",
	});
}

export default Component;
