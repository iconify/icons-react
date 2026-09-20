import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz8kk_bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz8kk_bif"/>`,
		"fallback": "streamline-sharp:loop-1-remix",
	});
}

export default Component;
