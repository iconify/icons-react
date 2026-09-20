import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aio2xib1e.css';
import '../../css/h/hp8gss3tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aio2xib1e"/><path class="hp8gss3tw"/>`,
		"fallback": "streamline-ultimate:warehouse-cart-package-ribbon-bold",
	});
}

export default Component;
