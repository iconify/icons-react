import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3n68pblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3n68pblc"/>`,
		"fallback": "hugeicons:phone-incoming",
	});
}

export default Component;
