import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y7wai_o7n.css';
import '../../css/m/myq80x50n.css';
import '../../css/g/g6wucrbqc.css';
import '../../css/k/k-aeqebww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="y7wai_o7n"/><rect class="myq80x50n"/><rect class="g6wucrbqc"/><path class="k-aeqebww"/></g>`,
		"fallback": "streamline:interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy",
	});
}

export default Component;
