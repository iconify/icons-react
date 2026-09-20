import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3j_ir1az.css';
import '../../css/z/z99fhbbdv.css';
import '../../css/h/hgjk-obrc.css';
import '../../css/s/sle0b2beh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v3j_ir1az"/><path class="z99fhbbdv"/><path class="hgjk-obrc"/><path clip-rule="evenodd" class="sle0b2beh"/></g>`,
		"fallback": "streamline-flex-color:production-belt-time-flat",
	});
}

export default Component;
