import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y5r43gb7c.css';
import '../../css/h/harpdob2d.css';
import '../../css/a/abr98jbty.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y5r43gb7c"/><path class="harpdob2d"/><path class="abr98jbty"/></g>`,
		"fallback": "streamline-flex:transfer-truck-time",
	});
}

export default Component;
