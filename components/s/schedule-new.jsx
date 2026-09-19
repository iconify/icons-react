import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqrmy-53b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqrmy-53b"/>`,
		"fallback": "grommet-icons:schedule-new",
	});
}

export default Component;
