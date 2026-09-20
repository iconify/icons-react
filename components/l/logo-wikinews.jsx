import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs95uib-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs95uib-t"/>`,
		"fallback": "ooui:logo-wikinews",
	});
}

export default Component;
