import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr3h8eklo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr3h8eklo"/>`,
		"fallback": "streamline:interface-edit-flip-horizontal-1-arrow-design-flip-reflect",
	});
}

export default Component;
