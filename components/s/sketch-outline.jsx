import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkprxj80h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkprxj80h"/>`,
		"fallback": "basil:sketch-outline",
	});
}

export default Component;
