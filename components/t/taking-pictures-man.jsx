import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoyrl7zbu.css';
import '../../css/u/u-uylkhfw.css';
import '../../css/a/ai593zq1u.css';
import '../../css/c/cbl9e3btd.css';
import '../../css/f/fxaniu0ed.css';
import '../../css/q/qp29n3bmm.css';
import '../../css/s/sgzyy-oxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoyrl7zbu"/><path class="u-uylkhfw"/><path class="ai593zq1u"/><path class="cbl9e3btd"/><path class="fxaniu0ed"/><path class="qp29n3bmm"/><path class="sgzyy-oxx"/></g>`,
		"fallback": "streamline-freehand-color:taking-pictures-man",
	});
}

export default Component;
