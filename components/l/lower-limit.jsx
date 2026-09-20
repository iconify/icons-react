import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf7qtd1bk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf7qtd1bk"/>`,
		"fallback": "ix:lower-limit",
	});
}

export default Component;
