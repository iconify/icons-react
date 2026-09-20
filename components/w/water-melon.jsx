import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p8fq81dus.css';
import '../../css/q/q-2wnz6il.css';
import '../../css/k/k2uypbq3u.css';
import '../../css/f/f-v6f5bxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p8fq81dus"/><path class="q-2wnz6il"/><path class="k2uypbq3u"/><path class="f-v6f5bxw"/></g>`,
		"fallback": "streamline-plump-color:water-melon",
	});
}

export default Component;
