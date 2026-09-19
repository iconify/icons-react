import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyv7zbbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyv7zbbea"/>`,
		"fallback": "grommet-icons:virtual-storage",
	});
}

export default Component;
