import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slu3g-y_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slu3g-y_t"/>`,
		"fallback": "lucide:waves-vertical",
	});
}

export default Component;
