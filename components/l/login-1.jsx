import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zkdnhvb2p.css';
import '../../css/n/n1yo5zbgq.css';
import '../../css/h/h7nnb4boh.css';
import '../../css/o/oq2msub3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zkdnhvb2p"/><path class="n1yo5zbgq"/><path class="h7nnb4boh"/><path class="oq2msub3o"/></g>`,
		"fallback": "streamline-plump-color:login-1",
	});
}

export default Component;
