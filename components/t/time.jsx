import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/und3nmb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="und3nmb8b"/>`,
		"fallback": "grommet-icons:time",
	});
}

export default Component;
