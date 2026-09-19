import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/h/hlx4kpo7b.css';
import '../../css/b/bi7dy2bjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="hlx4kpo7b"/><path class="bi7dy2bjk"/></g>`,
		"fallback": "icon-park:update-rotation",
	});
}

export default Component;
