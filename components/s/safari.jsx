import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/f/frxo6vb7m.css';
import '../../css/g/gavebgz5n.css';
import '../../css/i/i7upoqb2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="frxo6vb7m"/><path class="gavebgz5n"/><path class="i7upoqb2t"/></g>`,
		"fallback": "streamline-plump-color:safari",
	});
}

export default Component;
