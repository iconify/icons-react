import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzwmi2b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kzwmi2b_a"/>`,
		"fallback": "majesticons:list-box",
	});
}

export default Component;
