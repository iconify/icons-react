import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tikcyhp9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tikcyhp9a"/>`,
		"fallback": "iconoir:sound-low-solid",
	});
}

export default Component;
