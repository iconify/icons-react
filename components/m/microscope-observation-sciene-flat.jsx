import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_jo4vfmb.css';
import '../../css/w/wo2y-d8wb.css';
import '../../css/u/uqb0yqbaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t_jo4vfmb"/><path class="wo2y-d8wb"/><path clip-rule="evenodd" class="uqb0yqbaw"/></g>`,
		"fallback": "streamline-flex-color:microscope-observation-sciene-flat",
	});
}

export default Component;
