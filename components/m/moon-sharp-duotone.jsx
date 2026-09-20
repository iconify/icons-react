import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzqpya2xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzqpya2xq"/>`,
		"fallback": "keyline-icons:moon-sharp-duotone",
	});
}

export default Component;
