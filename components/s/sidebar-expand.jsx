import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kx4yw6bbs.css';
import '../../css/b/biy3-gf5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kx4yw6bbs"/><path class="biy3-gf5t"/></g>`,
		"fallback": "iconoir:sidebar-expand",
	});
}

export default Component;
