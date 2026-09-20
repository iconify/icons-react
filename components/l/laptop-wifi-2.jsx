import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nnkidodsc.css';
import '../../css/z/zhdv9cy2b.css';
import '../../css/q/qvem_4fos.css';
import '../../css/u/uvtb2lbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nnkidodsc"/><path class="zhdv9cy2b"/><path class="qvem_4fos"/><path class="uvtb2lbvy"/></g>`,
		"fallback": "streamline-cyber:laptop-wifi-2",
	});
}

export default Component;
