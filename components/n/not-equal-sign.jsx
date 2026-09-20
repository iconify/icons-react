import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm_t_cc9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm_t_cc9x"/>`,
		"fallback": "streamline-color:not-equal-sign",
	});
}

export default Component;
