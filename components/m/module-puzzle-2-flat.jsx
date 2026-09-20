import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqoogac1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqoogac1b"/>`,
		"fallback": "streamline-sharp-color:module-puzzle-2-flat",
	});
}

export default Component;
