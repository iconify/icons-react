import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0oxfv-jn.css';
import '../../css/y/yf-k82b-b.css';
import '../../css/k/krcvqcb-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o0oxfv-jn"/><circle class="yf-k82b-b"/><path class="krcvqcb-l"/>`,
		"fallback": "carbon:support-vector-machine",
	});
}

export default Component;
