import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kge_lwb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kge_lwb8s"/>`,
		"fallback": "mingcute:skateboard-line",
	});
}

export default Component;
