import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot0t-9mok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot0t-9mok"/>`,
		"fallback": "prime:language",
	});
}

export default Component;
