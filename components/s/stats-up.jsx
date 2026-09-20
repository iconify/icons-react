import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdo88m09q.css';
import '../../css/k/k3v_cudyg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdo88m09q"/><path class="k3v_cudyg"/>`,
		"fallback": "lineicons:stats-up",
	});
}

export default Component;
