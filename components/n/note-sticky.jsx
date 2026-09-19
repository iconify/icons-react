import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxxtlbu8s.css';
import '../../css/w/wii78dxzz.css';
import '../../css/m/m5u67xvhu.css';
import '../../css/p/pe-9v_bgz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lxxtlbu8s"/><path class="wii78dxzz"/><path class="m5u67xvhu"/><path class="pe-9v_bgz"/></g>`,
		"fallback": "glyphs-poly:note-sticky",
	});
}

export default Component;
