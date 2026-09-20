import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kv76-bb8i.css';
import '../../css/m/mivh__bmk.css';
import '../../css/m/mqs282b7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="kv76-bb8i"/><path class="mivh__bmk"/><path class="mqs282b7z"/></g>`,
		"fallback": "streamline-plump:lost-and-found",
	});
}

export default Component;
