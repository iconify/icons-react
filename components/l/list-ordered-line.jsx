import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdb262e9z.css';
import '../../css/s/svs9u_b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdb262e9z"/><path class="svs9u_b2t"/>`,
		"fallback": "mingcute:list-ordered-line",
	});
}

export default Component;
