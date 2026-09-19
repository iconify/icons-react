import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4-0ybc2n.css';

const viewBox = {"width":1536,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4-0ybc2n"/>`,
		"fallback": "fa:reorder",
	});
}

export default Component;
