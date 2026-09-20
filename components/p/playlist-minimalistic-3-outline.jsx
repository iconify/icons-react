import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm3heybwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm3heybwu"/>`,
		"fallback": "solar:playlist-minimalistic-3-outline",
	});
}

export default Component;
