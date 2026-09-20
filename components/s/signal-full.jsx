import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r6bgobbwr.css';
import '../../css/n/nkvpf2b8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="r6bgobbwr"/><path class="nkvpf2b8t"/></g>`,
		"fallback": "streamline-plump-color:signal-full",
	});
}

export default Component;
