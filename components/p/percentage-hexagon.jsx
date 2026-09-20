import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpj-7ybes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpj-7ybes"/>`,
		"fallback": "mynaui:percentage-hexagon",
	});
}

export default Component;
