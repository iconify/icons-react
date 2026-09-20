import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dmwn8n1ww.css';
import '../../css/g/g3hvgmbhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="dmwn8n1ww"/><path class="g3hvgmbhd"/></g>`,
		"fallback": "streamline-plump-color:music-note-2",
	});
}

export default Component;
