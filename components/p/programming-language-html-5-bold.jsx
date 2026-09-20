import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd5jr6i4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd5jr6i4d"/>`,
		"fallback": "streamline-ultimate:programming-language-html-5-bold",
	});
}

export default Component;
