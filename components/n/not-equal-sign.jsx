import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiph_s-7m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiph_s-7m"/>`,
		"fallback": "streamline:not-equal-sign",
	});
}

export default Component;
