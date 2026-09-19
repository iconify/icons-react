import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb1lmbw9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb1lmbw9t"/>`,
		"fallback": "grommet-icons:radial-selected",
	});
}

export default Component;
