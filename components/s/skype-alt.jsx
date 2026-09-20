import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_wke9bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_wke9bko"/>`,
		"fallback": "uil:skype-alt",
	});
}

export default Component;
