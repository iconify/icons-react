import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neh7qo-0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="neh7qo-0n"/>`,
		"fallback": "ix:notebook",
	});
}

export default Component;
