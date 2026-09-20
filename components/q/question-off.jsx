import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npv9m71la.css';
import '../../css/f/fkksm04zo.css';
import '../../css/y/y4_l99bdm.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npv9m71la"/><path clip-rule="evenodd" class="fkksm04zo"/><path clip-rule="evenodd" class="y4_l99bdm"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:question-off",
	});
}

export default Component;
