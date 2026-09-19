import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5r4nqb_w.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5r4nqb_w"/>`,
		"fallback": "ps:water-temperature-95",
	});
}

export default Component;
