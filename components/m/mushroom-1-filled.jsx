import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lozx6-brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lozx6-brm"/>`,
		"fallback": "tdesign:mushroom-1-filled",
	});
}

export default Component;
