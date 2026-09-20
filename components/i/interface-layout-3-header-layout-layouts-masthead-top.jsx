import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/w/wklwp6b8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><path class="wklwp6b8t"/></g>`,
		"fallback": "streamline:interface-layout-3-header-layout-layouts-masthead-top",
	});
}

export default Component;
