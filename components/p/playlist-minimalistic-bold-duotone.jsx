import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcwj51wla.css';
import '../../css/d/dxldknbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcwj51wla"/><path class="dxldknbxd"/>`,
		"fallback": "solar:playlist-minimalistic-bold-duotone",
	});
}

export default Component;
