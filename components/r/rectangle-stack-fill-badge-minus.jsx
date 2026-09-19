import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an6qy8_nf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an6qy8_nf"/>`,
		"fallback": "f7:rectangle-stack-fill-badge-minus",
	});
}

export default Component;
