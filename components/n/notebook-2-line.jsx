import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8q64_3nk.css';
import '../../css/k/kuvr68irh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8q64_3nk"/><path class="kuvr68irh"/>`,
		"fallback": "mingcute:notebook-2-line",
	});
}

export default Component;
