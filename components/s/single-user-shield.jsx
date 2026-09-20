import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec5cx6f6r.css';
import '../../css/f/fnicxpbzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec5cx6f6r"/><path class="fnicxpbzz"/>`,
		"fallback": "streamline-pixel:single-user-shield",
	});
}

export default Component;
