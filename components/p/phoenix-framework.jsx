import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcadknb2t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcadknb2t"/>`,
		"fallback": "la:phoenix-framework",
	});
}

export default Component;
