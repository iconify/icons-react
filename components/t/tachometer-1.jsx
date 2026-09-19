import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-briy-mv.css';
import '../../css/q/qhogk5bhw.css';
import '../../css/g/gyvacpo7m.css';
import '../../css/b/ba88vdbzk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g-briy-mv"/><path class="qhogk5bhw"/><path class="gyvacpo7m"/><path class="ba88vdbzk"/></g>`,
		"fallback": "glyphs-poly:tachometer-1",
	});
}

export default Component;
