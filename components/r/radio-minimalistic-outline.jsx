import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylpz7_bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylpz7_bpw"/>`,
		"fallback": "solar:radio-minimalistic-outline",
	});
}

export default Component;
