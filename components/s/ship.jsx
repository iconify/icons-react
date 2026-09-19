import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpspcpjsa.css';
import '../../css/c/csufotbpy.css';
import '../../css/j/ju-cazbvc.css';
import '../../css/q/qt2plpg1d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cpspcpjsa"/><path clip-rule="evenodd" class="csufotbpy"/><path clip-rule="evenodd" class="ju-cazbvc"/><path class="qt2plpg1d"/></g>`,
		"fallback": "glyphs-poly:ship",
	});
}

export default Component;
