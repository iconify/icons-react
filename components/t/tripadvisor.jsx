import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okfx_dzuv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okfx_dzuv"/>`,
		"fallback": "cib:tripadvisor",
	});
}

export default Component;
