import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h1qs9futx.css';
import '../../css/p/p68a1syir.css';
import '../../css/u/umkcc8owe.css';
import '../../css/u/um581yjdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h1qs9futx"/><path class="p68a1syir"/><path class="umkcc8owe"/><path class="um581yjdr"/></g>`,
		"fallback": "streamline-plump-color:thermometer",
	});
}

export default Component;
