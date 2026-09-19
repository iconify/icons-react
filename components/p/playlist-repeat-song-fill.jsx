import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3d5ixbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3d5ixbat"/>`,
		"fallback": "iconamoon:playlist-repeat-song-fill",
	});
}

export default Component;
