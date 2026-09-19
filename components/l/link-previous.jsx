import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmb7g3bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmb7g3bgw"/>`,
		"fallback": "grommet-icons:link-previous",
	});
}

export default Component;
