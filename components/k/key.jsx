import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i02e_ii7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i02e_ii7a"/>`,
		"fallback": "pajamas:key",
	});
}

export default Component;
