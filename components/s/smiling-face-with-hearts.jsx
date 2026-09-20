import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/g/g2svsm15l.css';
import '../../css/z/z04drlb1l.css';
import '../../css/r/rmgjt6byk.css';
import '../../css/j/jii6c3x9u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="g2svsm15l"/><g class="z04drlb1l"><path class="rmgjt6byk"/><path class="jii6c3x9u"/></g>`,
		"fallback": "openmoji:smiling-face-with-hearts",
	});
}

export default Component;
