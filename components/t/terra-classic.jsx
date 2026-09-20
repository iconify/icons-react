import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_f-8ebio.css';
import '../../css/d/dmqvb9ndz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_f-8ebio"/><path class="dmqvb9ndz"/>`,
		"fallback": "token:terra-classic",
	});
}

export default Component;
