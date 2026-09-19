import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njks3in5h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njks3in5h"/>`,
		"fallback": "f7:square-fill",
	});
}

export default Component;
