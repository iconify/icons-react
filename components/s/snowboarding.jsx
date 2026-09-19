import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy9vtw7wx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy9vtw7wx"/>`,
		"fallback": "fa7-solid:snowboarding",
	});
}

export default Component;
