import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhp66mbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhp66mbcr"/>`,
		"fallback": "iconamoon:sorting-left-fill",
	});
}

export default Component;
