import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6o3i5n4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6o3i5n4z"/>`,
		"fallback": "reicon:speed-max-filled",
	});
}

export default Component;
