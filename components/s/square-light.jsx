import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idssa5b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idssa5b9o"/>`,
		"fallback": "stash:square-light",
	});
}

export default Component;
