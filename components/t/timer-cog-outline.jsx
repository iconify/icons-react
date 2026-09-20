import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebrfcd7vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebrfcd7vi"/>`,
		"fallback": "mdi:timer-cog-outline",
	});
}

export default Component;
