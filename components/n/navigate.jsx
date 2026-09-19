import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyo5bacyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyo5bacyp"/>`,
		"fallback": "grommet-icons:navigate",
	});
}

export default Component;
