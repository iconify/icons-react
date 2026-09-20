import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erakx_b9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erakx_b9a"/>`,
		"fallback": "la:temperature-high",
	});
}

export default Component;
