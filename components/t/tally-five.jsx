import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aick66v3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aick66v3f"/>`,
		"fallback": "mynaui:tally-five",
	});
}

export default Component;
