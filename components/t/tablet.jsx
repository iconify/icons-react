import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_t__4isx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_t__4isx"/>`,
		"fallback": "pajamas:tablet",
	});
}

export default Component;
