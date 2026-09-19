import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh1l-7bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh1l-7bar"/>`,
		"fallback": "humbleicons:pulse",
	});
}

export default Component;
