import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krnl832ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krnl832ox"/>`,
		"fallback": "mingcute:user-visible-line",
	});
}

export default Component;
