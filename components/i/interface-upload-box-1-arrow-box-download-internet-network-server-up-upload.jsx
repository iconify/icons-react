import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gp1ku3j4j.css';
import '../../css/v/v7ggwgbzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gp1ku3j4j"/><path class="v7ggwgbzt"/></g>`,
		"fallback": "streamline:interface-upload-box-1-arrow-box-download-internet-network-server-up-upload",
	});
}

export default Component;
