import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5yr6acra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5yr6acra"/>`,
		"fallback": "grommet-icons:text-align-center",
	});
}

export default Component;
