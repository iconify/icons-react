import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3kpo5i1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3kpo5i1h"/>`,
		"fallback": "prime:mars",
	});
}

export default Component;
