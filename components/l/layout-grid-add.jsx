import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_e47cbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_e47cbwx"/>`,
		"fallback": "tabler:layout-grid-add",
	});
}

export default Component;
