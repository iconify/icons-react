import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag_t9i1ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag_t9i1ex"/>`,
		"fallback": "mdi:language-rust",
	});
}

export default Component;
