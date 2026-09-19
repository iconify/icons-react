import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-ms6bclb.css';
import '../../css/h/hx5u2eb2s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-ms6bclb"/><path class="hx5u2eb2s"/>`,
		"fallback": "ep:smoking",
	});
}

export default Component;
