import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if-t8gblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if-t8gblg"/>`,
		"fallback": "mynaui:umbrella-solid",
	});
}

export default Component;
