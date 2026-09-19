import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-c1osbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-c1osbtf"/>`,
		"fallback": "bxs:purchase-tag-alt",
	});
}

export default Component;
