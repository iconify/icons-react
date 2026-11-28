import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to89g0cag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to89g0cag"/>`,
		"fallback": "noviair:message-square-clock",
	});
}

export default Component;
