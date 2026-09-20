import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz7gnccvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz7gnccvy"/>`,
		"fallback": "tabler:music-down",
	});
}

export default Component;
