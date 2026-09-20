import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcaua0tov.css';
import '../../css/h/h8815mb5m.css';
import '../../css/q/qq45ahbig.css';
import '../../css/z/z89khfd2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xcaua0tov"/><path clip-rule="evenodd" class="h8815mb5m"/><path class="qq45ahbig"/><path class="z89khfd2b"/></g>`,
		"fallback": "reicon:layers-duotone",
	});
}

export default Component;
