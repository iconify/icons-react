import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s9bxdrb3i.css';
import '../../css/r/rzmctbalc.css';
import '../../css/v/vfg5fisqu.css';
import '../../css/r/riqg6fbee.css';
import '../../css/l/l9c1yv-go.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="s9bxdrb3i"/><path class="rzmctbalc"/><path class="vfg5fisqu"/><path class="riqg6fbee"/><path class="l9c1yv-go"/></g>`,
		"fallback": "streamline-plump-color:virus-antivirus",
	});
}

export default Component;
