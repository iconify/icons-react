import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9powx-_c.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/w/wzf4edn2z.css';
import '../../css/v/v-y-uhhip.css';
import '../../css/z/z3_onkb4z.css';
import '../../css/s/s216q6btk.css';
import '../../css/p/pyu4qpbsy.css';

const viewBox = {"width":225,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="x9powx-_c"/><g class="n1mjunbsu"><path class="wzf4edn2z"/><path class="v-y-uhhip"/><path class="z3_onkb4z"/><path class="s216q6btk"/><circle class="pyu4qpbsy"/></g>`,
		"fallback": "thesvg-color:timesheet",
	});
}

export default Component;
