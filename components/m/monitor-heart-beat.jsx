import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo9kpex6w.css';
import '../../css/o/osiihfnwq.css';
import '../../css/j/jbwve3w4h.css';
import '../../css/d/d4bk0tbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fo9kpex6w"/><path class="osiihfnwq"/><path class="jbwve3w4h"/><path class="d4bk0tbjq"/></g>`,
		"fallback": "streamline-ultimate-color:monitor-heart-beat",
	});
}

export default Component;
