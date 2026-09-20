import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idbupnmzr.css';
import '../../css/r/ruip4jr8k.css';
import '../../css/f/fp56qxbvd.css';
import '../../css/n/nf6s2rbdo.css';
import '../../css/g/gq5luxbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idbupnmzr"/><path class="ruip4jr8k"/><path class="fp56qxbvd"/><path class="nf6s2rbdo"/><path class="gq5luxbxb"/></g>`,
		"fallback": "streamline-cyber-color:wallet",
	});
}

export default Component;
