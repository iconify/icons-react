import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwzh7abjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwzh7abjq"/>`,
		"fallback": "pixelarticons:square-scissors",
	});
}

export default Component;
