import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzq-v8b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzq-v8b2p"/>`,
		"fallback": "pixelarticons:letter-n",
	});
}

export default Component;
