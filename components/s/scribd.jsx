import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npypv3mzn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npypv3mzn"/>`,
		"fallback": "entypo-social:scribd",
	});
}

export default Component;
