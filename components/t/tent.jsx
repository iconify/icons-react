import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kuztw9vfu.css';
import '../../css/s/srr0csbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kuztw9vfu"/><path class="srr0csbvq"/></g>`,
		"fallback": "matita:tent",
	});
}

export default Component;
