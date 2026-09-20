import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up728wbje.css';
import '../../css/q/qq-uqkb6o.css';
import '../../css/s/sym-c2v1r.css';
import '../../css/o/olz-i8b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="up728wbje"/><path class="qq-uqkb6o"/><path class="sym-c2v1r"/><path class="olz-i8b2t"/></g>`,
		"fallback": "streamline-cyber-color:paper-binder",
	});
}

export default Component;
