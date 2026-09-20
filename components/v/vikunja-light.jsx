import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fft8hptxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fft8hptxu"/>`,
		"fallback": "selfhst:vikunja-light",
	});
}

export default Component;
