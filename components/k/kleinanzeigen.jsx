import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia8ult65t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia8ult65t"/>`,
		"fallback": "thesvg:kleinanzeigen",
	});
}

export default Component;
