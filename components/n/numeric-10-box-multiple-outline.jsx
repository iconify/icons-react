import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csnq9achd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csnq9achd"/>`,
		"fallback": "mdi:numeric-10-box-multiple-outline",
	});
}

export default Component;
