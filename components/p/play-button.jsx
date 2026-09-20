import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/m_n22nbel.css';
import '../../css/a/abtghqbcf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="m_n22nbel"/><path class="abtghqbcf"/></g>`,
		"fallback": "system-uicons:play-button",
	});
}

export default Component;
