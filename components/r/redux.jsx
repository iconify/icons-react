import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8n011b1s.css';
import '../../css/w/wa9dipq7e.css';
import '../../css/q/qkeylbb3s.css';
import '../../css/e/e07x1fbkh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="v8n011b1s"/><path class="wa9dipq7e"/><path class="qkeylbb3s"/><path class="e07x1fbkh"/></g>`,
		"fallback": "skill-icons:redux",
	});
}

export default Component;
