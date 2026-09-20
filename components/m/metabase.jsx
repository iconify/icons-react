import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsh0a7b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsh0a7b4z"/>`,
		"fallback": "thesvg-color:metabase",
	});
}

export default Component;
