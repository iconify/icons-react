import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz5z9m_sg.css';
import '../../css/y/yo5bjdbbd.css';
import '../../css/k/k72n2br1v.css';
import '../../css/v/v0u_jlb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz5z9m_sg"/><path class="yo5bjdbbd"/><path class="k72n2br1v"/><path class="v0u_jlb-x"/></g>`,
		"fallback": "streamline-freehand-color:vide-document-avi-1",
	});
}

export default Component;
