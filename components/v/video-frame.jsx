import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aujvfs0gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aujvfs0gv"/>`,
		"fallback": "reicon:video-frame",
	});
}

export default Component;
