import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvoxb-ghc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvoxb-ghc"/>`,
		"fallback": "hugeicons:layer-send-backward",
	});
}

export default Component;
