import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uoi8cibpu.css';
import '../../css/r/rxyh4jbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uoi8cibpu"/><path class="rxyh4jbsl"/></g>`,
		"fallback": "keyline-icons:scissors-sharp-two-tone",
	});
}

export default Component;
