import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkim5g7xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkim5g7xs"/>`,
		"fallback": "ri:npmjs-fill",
	});
}

export default Component;
