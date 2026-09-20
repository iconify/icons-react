import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekmb91bny.css';
import '../../css/h/hzem-r0io.css';
import '../../css/f/f6fjwablo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ekmb91bny"/><circle class="hzem-r0io"/><path class="f6fjwablo"/></g>`,
		"fallback": "lets-icons:stethoscope",
	});
}

export default Component;
