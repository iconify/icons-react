import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh_k1ybej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh_k1ybej"/>`,
		"fallback": "tabler:table-off",
	});
}

export default Component;
