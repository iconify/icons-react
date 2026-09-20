import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvv8o3bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvv8o3bsh"/>`,
		"fallback": "reicon:music-note-filled",
	});
}

export default Component;
