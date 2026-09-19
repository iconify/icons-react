import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq8qz_u7x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq8qz_u7x"/>`,
		"fallback": "carbon:model-foundation",
	});
}

export default Component;
