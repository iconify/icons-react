import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy2ew1bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy2ew1bow"/>`,
		"fallback": "thesvg:todoist",
	});
}

export default Component;
