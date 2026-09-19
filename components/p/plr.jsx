import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg4gvs8ee.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg4gvs8ee"/>`,
		"fallback": "cryptocurrency:plr",
	});
}

export default Component;
