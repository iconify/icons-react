import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnks6dbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnks6dbfh"/>`,
		"fallback": "pixelarticons:mail-flash",
	});
}

export default Component;
