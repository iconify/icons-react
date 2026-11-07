import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5zd-yeve.css';
import '../../css/i/i5wpqgyez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5zd-yeve"/><path clip-rule="evenodd" class="i5wpqgyez"/>`,
		"fallback": "solar:key-minimalistic-square-bold",
	});
}

export default Component;
