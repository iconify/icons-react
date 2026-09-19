import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bml9k6b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bml9k6b2g"/>`,
		"fallback": "ci:log-out",
	});
}

export default Component;
