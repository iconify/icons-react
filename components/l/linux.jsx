import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa23_2rjh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa23_2rjh"/>`,
		"fallback": "picon:linux",
	});
}

export default Component;
