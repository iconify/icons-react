import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drvhp1nhb.css';
import '../../css/e/ew-j63_wx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drvhp1nhb"/><path class="ew-j63_wx"/>`,
		"fallback": "carbon:two-factor-authentication",
	});
}

export default Component;
