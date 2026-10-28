import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pru0h0bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pru0h0bec"/>`,
		"fallback": "codex:laptop",
	});
}

export default Component;
