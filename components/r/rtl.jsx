import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz3sp2bny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz3sp2bny"/>`,
		"fallback": "icomoon-free:rtl",
	});
}

export default Component;
