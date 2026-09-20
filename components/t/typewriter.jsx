import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y0fq2mb0a.css';
import '../../css/z/zik3pnuln.css';
import '../../css/g/gu7-ijm_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y0fq2mb0a"/><path class="zik3pnuln"/><path class="gu7-ijm_q"/></g>`,
		"fallback": "streamline-flex:typewriter",
	});
}

export default Component;
