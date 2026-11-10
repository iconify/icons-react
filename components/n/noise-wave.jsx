import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klr_i1bss.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klr_i1bss"/>`,
		"fallback": "at-icons:noise-wave",
	});
}

export default Component;
