import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yekkhzb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yekkhzb5s"/>`,
		"fallback": "thesvg-color:major-league-hacking",
	});
}

export default Component;
