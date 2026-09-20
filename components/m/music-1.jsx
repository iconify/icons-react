import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bz6glwb_a.css';
import '../../css/x/xodybubzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bz6glwb_a"/><path class="xodybubzn"/></g>`,
		"fallback": "tdesign:music-1",
	});
}

export default Component;
