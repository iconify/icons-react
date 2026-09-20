import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9xz5fzpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9xz5fzpd"/>`,
		"fallback": "si:mic-detailed-line",
	});
}

export default Component;
