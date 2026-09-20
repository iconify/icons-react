import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwmzdrboq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwmzdrboq"/>`,
		"fallback": "streamline:interface-edit-flip-horizontal-2-arrow-design-flip-reflect",
	});
}

export default Component;
