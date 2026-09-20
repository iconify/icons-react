import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cse72pblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cse72pblw"/>`,
		"fallback": "mingcute:miyajima-torii-line",
	});
}

export default Component;
