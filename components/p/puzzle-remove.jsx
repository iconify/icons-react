import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a56q-fomj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a56q-fomj"/>`,
		"fallback": "mdi:puzzle-remove",
	});
}

export default Component;
