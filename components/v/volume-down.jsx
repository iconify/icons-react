import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjg6q_bph.css';

const viewBox = {"width":288,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjg6q_bph"/>`,
		"fallback": "zmdi:volume-down",
	});
}

export default Component;
