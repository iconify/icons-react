import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mew9r2bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mew9r2bpg"/>`,
		"fallback": "solar:radio-outline",
	});
}

export default Component;
