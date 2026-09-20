import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfl4hzbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfl4hzbro"/>`,
		"fallback": "mdi:mouse",
	});
}

export default Component;
