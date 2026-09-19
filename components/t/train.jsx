import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wolh3pfgd.css';
import '../../css/d/dn9gys-yh.css';
import '../../css/q/qwat3dvlt.css';
import '../../css/d/dxejs_bvm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wolh3pfgd"/><path clip-rule="evenodd" class="dn9gys-yh"/><path class="qwat3dvlt"/><rect class="dxejs_bvm"/></g>`,
		"fallback": "glyphs-poly:train",
	});
}

export default Component;
