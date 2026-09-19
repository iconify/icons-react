import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu_kr_k0k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu_kr_k0k"/>`,
		"fallback": "fa7-brands:resolving",
	});
}

export default Component;
