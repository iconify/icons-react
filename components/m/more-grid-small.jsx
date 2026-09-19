import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwixg__8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwixg__8z"/>`,
		"fallback": "ci:more-grid-small",
	});
}

export default Component;
