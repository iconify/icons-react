import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl-c-h5mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl-c-h5mx"/>`,
		"fallback": "withicons:megaphone-solid",
	});
}

export default Component;
