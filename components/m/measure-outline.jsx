import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp0dxhuxm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp0dxhuxm"/>`,
		"fallback": "lsicon:measure-outline",
	});
}

export default Component;
