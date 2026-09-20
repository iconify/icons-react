import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu78macwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu78macwp"/>`,
		"fallback": "thesvg-color:ratatui",
	});
}

export default Component;
