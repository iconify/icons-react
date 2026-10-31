import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eob-z-l-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eob-z-l-w"/>`,
		"fallback": "coolicons:pencil-line-round",
	});
}

export default Component;
