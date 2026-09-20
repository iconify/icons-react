import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgmx5biec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgmx5biec"/>`,
		"fallback": "ri:puzzle-fill",
	});
}

export default Component;
