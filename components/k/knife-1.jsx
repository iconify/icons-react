import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq60dbcoe.css';
import '../../css/d/dha0ty17r.css';
import '../../css/b/btkr98b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bq60dbcoe"/><path class="dha0ty17r"/><path class="btkr98b2h"/></g>`,
		"fallback": "streamline-cyber-color:knife-1",
	});
}

export default Component;
