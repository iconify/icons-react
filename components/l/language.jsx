import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr-mobb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr-mobb_t"/>`,
		"fallback": "meteor-icons:language",
	});
}

export default Component;
