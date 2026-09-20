import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxmpm5bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxmpm5bpe"/>`,
		"fallback": "mdi:touch-text-outline",
	});
}

export default Component;
