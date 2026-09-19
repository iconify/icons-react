import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/u/uxni1ac_w.css';
import '../../css/z/zurui3ban.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="uxni1ac_w"/><path class="zurui3ban"/>`,
		"fallback": "ant-design:minus-circle-twotone",
	});
}

export default Component;
