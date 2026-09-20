import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqqwndb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqqwndb6f"/>`,
		"fallback": "ix:ticket-filled",
	});
}

export default Component;
