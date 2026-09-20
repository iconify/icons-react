import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehne29b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehne29b3a"/>`,
		"fallback": "thesvg-color:the-weather-channel",
	});
}

export default Component;
