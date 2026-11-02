import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsd79yplg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsd79yplg"/>`,
		"fallback": "mingcute:monument-line",
	});
}

export default Component;
