import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cqq1a1bhh.css';
import '../../css/x/xkmtl8oby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cqq1a1bhh"/><path class="xkmtl8oby"/></g>`,
		"fallback": "streamline-flex:map-location",
	});
}

export default Component;
