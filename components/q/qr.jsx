import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qx0zlrbfc.css';
import '../../css/q/qrftl0beu.css';
import '../../css/q/qjgik2ywf.css';
import '../../css/l/lb-3ved6p.css';
import '../../css/s/sh317bxpv.css';
import '../../css/f/f71oehb2z.css';
import '../../css/p/pqtiuac5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qx0zlrbfc"/><path clip-rule="evenodd" class="qrftl0beu"/><path class="qjgik2ywf"/><path clip-rule="evenodd" class="lb-3ved6p"/><path class="sh317bxpv"/><path clip-rule="evenodd" class="f71oehb2z"/><path class="pqtiuac5c"/></g>`,
		"fallback": "reicon:qr",
	});
}

export default Component;
