import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmw6fyb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmw6fyb9s"/>`,
		"fallback": "tabler:tilt-shift-filled",
	});
}

export default Component;
