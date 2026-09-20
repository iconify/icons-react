import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq8jt4b6k.css';
import '../../css/l/l9e25dwus.css';
import '../../css/c/ca-i72ida.css';
import '../../css/p/phkzaqbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qq8jt4b6k"/><path class="l9e25dwus"/><path class="ca-i72ida"/><path class="phkzaqbtd"/></g>`,
		"fallback": "streamline-freehand-color:touch-id-fingerprint-square",
	});
}

export default Component;
