import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnz-81blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnz-81blz"/>`,
		"fallback": "grommet-icons:status-warning",
	});
}

export default Component;
