import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufpp1mb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufpp1mb5g"/>`,
		"fallback": "ri:key-line",
	});
}

export default Component;
