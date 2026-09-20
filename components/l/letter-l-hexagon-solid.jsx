import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cas24ccaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cas24ccaz"/>`,
		"fallback": "mynaui:letter-l-hexagon-solid",
	});
}

export default Component;
