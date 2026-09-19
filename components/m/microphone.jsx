import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6u0kfq8u.css';
import '../../css/m/mytk_qdsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6u0kfq8u"/><path class="mytk_qdsu"/>`,
		"fallback": "cil:microphone",
	});
}

export default Component;
