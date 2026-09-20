import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e17p_vdgz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e17p_vdgz"/>`,
		"fallback": "streamline:interface-text-formatting-text-strike-through-text-strike-through-formatting-format",
	});
}

export default Component;
