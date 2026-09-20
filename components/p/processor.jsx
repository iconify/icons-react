import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdb1m4bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdb1m4bwo"/>`,
		"fallback": "uil:processor",
	});
}

export default Component;
