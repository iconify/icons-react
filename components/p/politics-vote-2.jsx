import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m7tn6kmes.css';
import '../../css/z/zch9i-a1h.css';
import '../../css/z/zg_q-wb7c.css';
import '../../css/m/mx8624bdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="m7tn6kmes"/><path class="zch9i-a1h"/><path class="zg_q-wb7c"/><path class="mx8624bdl"/></g>`,
		"fallback": "streamline-plump:politics-vote-2",
	});
}

export default Component;
