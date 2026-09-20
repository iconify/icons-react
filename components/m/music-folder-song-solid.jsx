import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swk2k98ux.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="swk2k98ux"/>`,
		"fallback": "streamline:music-folder-song-solid",
	});
}

export default Component;
