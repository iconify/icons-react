import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rktl1906p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rktl1906p"/>`,
		"fallback": "grommet-icons:resources",
	});
}

export default Component;
