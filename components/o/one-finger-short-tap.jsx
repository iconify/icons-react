import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se0z4cciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se0z4cciz"/>`,
		"fallback": "streamline-sharp:one-finger-short-tap",
	});
}

export default Component;
