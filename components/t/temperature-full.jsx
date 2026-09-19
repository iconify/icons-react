import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwhib3n2t.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwhib3n2t"/>`,
		"fallback": "fa6-solid:temperature-full",
	});
}

export default Component;
