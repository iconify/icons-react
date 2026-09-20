import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb8t19bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb8t19bgt"/>`,
		"fallback": "lets-icons:remote-light",
	});
}

export default Component;
