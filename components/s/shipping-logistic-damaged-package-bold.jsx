import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvmol5kye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvmol5kye"/>`,
		"fallback": "streamline-ultimate:shipping-logistic-damaged-package-bold",
	});
}

export default Component;
