import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y1xxxcbsp.css';
import '../../css/c/cy0yvc0ls.css';
import '../../css/r/r67it2j7y.css';
import '../../css/s/s8c4pubxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="y1xxxcbsp"/><path class="cy0yvc0ls"/><path class="r67it2j7y"/><path class="s8c4pubxq"/></g>`,
		"fallback": "streamline-plump-color:layer-mask",
	});
}

export default Component;
