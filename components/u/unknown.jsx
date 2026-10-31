import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crqpn7b-k.css';
import '../../css/c/c003gc-5c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crqpn7b-k"/><path class="c003gc-5c"/>`,
		"fallback": "tabler-flags:unknown",
	});
}

export default Component;
