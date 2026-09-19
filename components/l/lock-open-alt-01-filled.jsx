import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_0hn4skk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_0hn4skk"/>`,
		"fallback": "griddy-icons:lock-open-alt-01-filled",
	});
}

export default Component;
