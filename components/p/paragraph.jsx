import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz_4febja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz_4febja"/>`,
		"fallback": "jam:paragraph",
	});
}

export default Component;
