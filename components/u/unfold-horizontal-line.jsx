import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmd5wrb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmd5wrb0a"/>`,
		"fallback": "mingcute:unfold-horizontal-line",
	});
}

export default Component;
