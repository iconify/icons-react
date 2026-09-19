import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul4ei0bva.css';
import '../../css/s/sqg9nvbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul4ei0bva"/><path class="sqg9nvbrk"/>`,
		"fallback": "boxicons:mobile-back",
	});
}

export default Component;
