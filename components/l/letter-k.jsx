import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzx0mkbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzx0mkbxt"/>`,
		"fallback": "tabler:letter-k",
	});
}

export default Component;
