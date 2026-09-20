import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii50_2b8n.css';
import '../../css/d/dvfv16fxk.css';
import '../../css/h/h6a-nbc0m.css';
import '../../css/o/o6bjqvb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii50_2b8n"/><path class="dvfv16fxk"/><path class="h6a-nbc0m"/><path class="o6bjqvb7h"/></g>`,
		"fallback": "streamline-cyber-color:transfer-folder",
	});
}

export default Component;
