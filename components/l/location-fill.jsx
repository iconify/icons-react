import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv8p7pohc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv8p7pohc"/>`,
		"fallback": "iconamoon:location-fill",
	});
}

export default Component;
