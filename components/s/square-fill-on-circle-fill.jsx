import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf4_o-boe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf4_o-boe"/>`,
		"fallback": "f7:square-fill-on-circle-fill",
	});
}

export default Component;
