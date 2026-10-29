import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/frpfn66gu.css';
import '../../css/m/me6kme-gu.css';
import '../../css/o/o2vm0kbuj.css';
import '../../css/g/gbftiw4sm.css';
import '../../css/e/eo-5y3hth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="frpfn66gu"/><path class="me6kme-gu"/><path class="o2vm0kbuj wm-a"/><path class="gbftiw4sm"/><path class="eo-5y3hth"/></g>`,
		"fallback": "withicons:projector-duo",
	});
}

export default Component;
