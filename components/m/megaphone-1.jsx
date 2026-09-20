import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jffk_1b6w.css';
import '../../css/m/me8iec82z.css';
import '../../css/g/gex7cbb8y.css';
import '../../css/g/g4rn1iqkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jffk_1b6w"/><path class="me8iec82z"/><path class="gex7cbb8y"/><path class="g4rn1iqkk"/></g>`,
		"fallback": "streamline-cyber-color:megaphone-1",
	});
}

export default Component;
