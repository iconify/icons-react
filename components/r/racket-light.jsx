import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtb4debnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtb4debnr"/>`,
		"fallback": "stash:racket-light",
	});
}

export default Component;
