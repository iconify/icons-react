import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr8rlhbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr8rlhbdv"/>`,
		"fallback": "streamline-sharp:steps-number-solid",
	});
}

export default Component;
