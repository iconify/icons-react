import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zxnuibchu.css';
import '../../css/h/huhxwjeou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zxnuibchu"/><path class="huhxwjeou"/></g>`,
		"fallback": "streamline:shipping-truck",
	});
}

export default Component;
