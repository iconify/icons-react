import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lgpnadc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3lgpnadc"/>`,
		"fallback": "mynaui:slash-circle-solid",
	});
}

export default Component;
