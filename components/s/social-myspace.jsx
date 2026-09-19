import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixzsp0vky.css';
import '../../css/m/mup4fgbbf.css';
import '../../css/v/vo89kwbtj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixzsp0vky"/><ellipse class="mup4fgbbf"/><path class="vo89kwbtj"/>`,
		"fallback": "foundation:social-myspace",
	});
}

export default Component;
