import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2u0bquxl.css';
import '../../css/w/w86667bir.css';
import '../../css/z/zsxwoebrt.css';
import '../../css/l/lf4la1vok.css';
import '../../css/h/hwcpncv3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="y2u0bquxl"/><circle class="w86667bir"/><circle class="zsxwoebrt"/><circle class="lf4la1vok"/><path class="hwcpncv3i"/></g>`,
		"fallback": "streamline:interface-hierarchy-2-node-organization-links-structure-link-nodes-network-hierarchy",
	});
}

export default Component;
