import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmsm-ux3o.css';
import '../../css/w/wc-d_n1dc.css';
import '../../css/u/uytvyw22t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmsm-ux3o"/><path class="wc-d_n1dc"/><path class="uytvyw22t"/></g>`,
		"fallback": "streamline-cyber-color:vector-line-curve",
	});
}

export default Component;
