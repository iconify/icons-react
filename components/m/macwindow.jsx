import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3a5pqxdp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3a5pqxdp"/>`,
		"fallback": "f7:macwindow",
	});
}

export default Component;
