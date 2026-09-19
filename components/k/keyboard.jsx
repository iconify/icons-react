import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6r_bpbmq.css';

const viewBox = {"width":1920,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6r_bpbmq"/>`,
		"fallback": "vs:keyboard",
	});
}

export default Component;
