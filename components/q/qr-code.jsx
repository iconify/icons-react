import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5-xvachn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5-xvachn"/>`,
		"fallback": "streamline-flex:qr-code",
	});
}

export default Component;
