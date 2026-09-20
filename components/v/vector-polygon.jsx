import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hh79unbjt.css';
import '../../css/j/j1d8v-bos.css';
import '../../css/u/u6mu3pbbg.css';
import '../../css/w/wnnq1tbxl.css';
import '../../css/f/fnz-6bhlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hh79unbjt"/><circle class="j1d8v-bos"/><circle class="u6mu3pbbg"/><circle class="wnnq1tbxl"/><circle class="fnz-6bhlk"/></g>`,
		"fallback": "lucide:vector-polygon",
	});
}

export default Component;
