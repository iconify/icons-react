import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njip1cc4a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njip1cc4a"/>`,
		"fallback": "f7:ticket-fill",
	});
}

export default Component;
