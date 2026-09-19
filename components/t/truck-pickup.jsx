import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_qrfpb2i.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_qrfpb2i"/>`,
		"fallback": "fa-solid:truck-pickup",
	});
}

export default Component;
