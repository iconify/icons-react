import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrrd32akn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrrd32akn"/>`,
		"fallback": "fa6-solid:registered",
	});
}

export default Component;
