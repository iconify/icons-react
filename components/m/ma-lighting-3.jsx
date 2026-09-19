import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga3_rpjey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga3_rpjey"/>`,
		"fallback": "cbi:ma-lighting-3",
	});
}

export default Component;
