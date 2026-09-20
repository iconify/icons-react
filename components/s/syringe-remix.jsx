import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_m-f1s5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_m-f1s5h"/>`,
		"fallback": "streamline-sharp:syringe-remix",
	});
}

export default Component;
