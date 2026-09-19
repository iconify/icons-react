import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umjj1fa5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umjj1fa5u"/>`,
		"fallback": "boxicons:keyframe-hold-ease-out-filled",
	});
}

export default Component;
