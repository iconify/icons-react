import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u332-vb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u332-vb3u"/>`,
		"fallback": "tabler:plane-tilt-filled",
	});
}

export default Component;
