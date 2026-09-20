import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly4hycbgl.css';
import '../../css/c/cle0u0bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly4hycbgl"/><path class="cle0u0bwz"/>`,
		"fallback": "octicon:terminal-24",
	});
}

export default Component;
