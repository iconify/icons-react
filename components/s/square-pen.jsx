import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/teys5bbqy.css';
import '../../css/g/giz5jtgdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="teys5bbqy"/><path class="giz5jtgdr"/></g>`,
		"fallback": "matita:square-pen",
	});
}

export default Component;
