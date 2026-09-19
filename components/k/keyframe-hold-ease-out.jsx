import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3beakb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3beakb9w"/>`,
		"fallback": "boxicons:keyframe-hold-ease-out",
	});
}

export default Component;
