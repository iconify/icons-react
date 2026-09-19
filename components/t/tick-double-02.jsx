import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idzswcbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idzswcbli"/>`,
		"fallback": "hugeicons:tick-double-02",
	});
}

export default Component;
