import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu2_l9r9r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu2_l9r9r"/>`,
		"fallback": "f7:sort-down",
	});
}

export default Component;
