import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sudnoc56x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sudnoc56x"/>`,
		"fallback": "andrsrxn:text-read-aloud",
	});
}

export default Component;
