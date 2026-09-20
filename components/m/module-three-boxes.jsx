import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfo4-pbkk.css';
import '../../css/i/it0vy6gan.css';
import '../../css/x/xy6g4pb_y.css';
import '../../css/o/obrn06bav.css';
import '../../css/g/geib7kbjm.css';
import '../../css/n/ntwosq94o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfo4-pbkk"/><path class="it0vy6gan"/><path class="xy6g4pb_y"/><path class="obrn06bav"/><path class="geib7kbjm"/><path class="ntwosq94o"/></g>`,
		"fallback": "streamline-freehand-color:module-three-boxes",
	});
}

export default Component;
