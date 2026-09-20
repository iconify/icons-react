import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znuit7wvf.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znuit7wvf"/>`,
		"fallback": "wi:moon-alt-waning-crescent-6",
	});
}

export default Component;
