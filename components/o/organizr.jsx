import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyc_-lbpj.css';

const viewBox = {"width":600,"height":600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyc_-lbpj"/>`,
		"fallback": "thesvg-color:organizr",
	});
}

export default Component;
