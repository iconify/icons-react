import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud64q60rk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud64q60rk"/>`,
		"fallback": "pajamas:thumb-down",
	});
}

export default Component;
