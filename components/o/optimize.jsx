import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq2d5abyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq2d5abyd"/>`,
		"fallback": "grommet-icons:optimize",
	});
}

export default Component;
