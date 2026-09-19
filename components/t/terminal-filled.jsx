import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeo8jg0ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeo8jg0ef"/>`,
		"fallback": "boxicons:terminal-filled",
	});
}

export default Component;
