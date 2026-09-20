import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euux7eb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euux7eb8s"/>`,
		"fallback": "streamline-ultimate:reward-stars-4",
	});
}

export default Component;
