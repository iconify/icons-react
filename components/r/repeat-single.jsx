import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/spgvm6bsw.css';
import '../../css/h/hl92zac0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="spgvm6bsw"/><path class="hl92zac0k"/></g>`,
		"fallback": "streamline-sharp:repeat-single",
	});
}

export default Component;
