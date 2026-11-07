import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtjo_wb4r.css';
import '../../css/k/k26hh3b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtjo_wb4r"/><path class="k26hh3b-l"/>`,
		"fallback": "solar:playlist-bold-duotone",
	});
}

export default Component;
