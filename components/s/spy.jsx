import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okjqmb5jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okjqmb5jh"/>`,
		"fallback": "tabler:spy",
	});
}

export default Component;
