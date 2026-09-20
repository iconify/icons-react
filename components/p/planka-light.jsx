import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y245uab7e.css';
import '../../css/z/ziuppeksn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y245uab7e"/><path class="ziuppeksn"/>`,
		"fallback": "selfhst:planka-light",
	});
}

export default Component;
