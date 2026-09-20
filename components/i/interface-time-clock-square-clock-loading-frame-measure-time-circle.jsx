import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/loc1oobaq.css';
import '../../css/w/w3lsaijhs.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="loc1oobaq"/><path class="w3lsaijhs"/><rect class="yph-txb3i"/></g>`,
		"fallback": "streamline:interface-time-clock-square-clock-loading-frame-measure-time-circle",
	});
}

export default Component;
