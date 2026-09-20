import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sepbreh4q.css';
import '../../css/p/poxrhjbuj.css';
import '../../css/m/m_ib5tbyo.css';
import '../../css/o/o7pf0ubkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sepbreh4q"/><path class="poxrhjbuj"/><path class="m_ib5tbyo"/><path class="o7pf0ubkk"/></g>`,
		"fallback": "streamline-sharp-color:user-add-plus",
	});
}

export default Component;
