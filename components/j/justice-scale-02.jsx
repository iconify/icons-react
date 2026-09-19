import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urm009q4l.css';
import '../../css/z/z0__n57ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="urm009q4l"/><path class="z0__n57ww"/></g>`,
		"fallback": "hugeicons:justice-scale-02",
	});
}

export default Component;
