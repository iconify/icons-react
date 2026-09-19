import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl69ehb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kl69ehb_w"/>`,
		"fallback": "iconamoon:number-2-square-fill",
	});
}

export default Component;
