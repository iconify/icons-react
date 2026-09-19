import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv1bw_b0n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv1bw_b0n"/>`,
		"fallback": "ep:paperclip",
	});
}

export default Component;
