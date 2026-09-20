import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyvpw6bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyvpw6bqn"/>`,
		"fallback": "tabler:robot-off",
	});
}

export default Component;
