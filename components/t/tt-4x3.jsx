import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/z/zpcw5vbmj.css';
import '../../css/y/ykg8hrbqb.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="zpcw5vbmj"/><path class="ykg8hrbqb"/>`,
		"fallback": "flag:tt-4x3",
	});
}

export default Component;
