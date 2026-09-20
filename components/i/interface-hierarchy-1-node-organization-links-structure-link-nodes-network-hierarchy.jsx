import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uww372pku.css';
import '../../css/m/mfd61fjuk.css';
import '../../css/f/fxtokhu1u.css';
import '../../css/t/tmborccvy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="uww372pku"/><circle class="mfd61fjuk"/><circle class="fxtokhu1u"/><path class="tmborccvy"/></g>`,
		"fallback": "streamline:interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy",
	});
}

export default Component;
