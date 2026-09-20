import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmo-e9byr.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmo-e9byr"/>`,
		"fallback": "octicon:milestone",
	});
}

export default Component;
