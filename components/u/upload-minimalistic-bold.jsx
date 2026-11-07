import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urermcsco.css';
import '../../css/h/hjvg905kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urermcsco"/><path class="hjvg905kl"/>`,
		"fallback": "solar:upload-minimalistic-bold",
	});
}

export default Component;
