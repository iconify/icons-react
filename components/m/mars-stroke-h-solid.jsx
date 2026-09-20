import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1z_yzfxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1z_yzfxg"/>`,
		"fallback": "la:mars-stroke-h-solid",
	});
}

export default Component;
