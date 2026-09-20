import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqehv-afi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jqehv-afi"/>`,
		"fallback": "majesticons:ruler-2",
	});
}

export default Component;
