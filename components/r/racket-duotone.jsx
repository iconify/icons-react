import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ybdh-6b.css';
import '../../css/u/utixu3psl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ybdh-6b"/><path class="utixu3psl"/>`,
		"fallback": "stash:racket-duotone",
	});
}

export default Component;
