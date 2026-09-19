import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_jvs0buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_jvs0buz"/>`,
		"fallback": "hugeicons:more-03",
	});
}

export default Component;
