import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s51np_b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s51np_b-h"/>`,
		"fallback": "hugeicons:quran-01",
	});
}

export default Component;
