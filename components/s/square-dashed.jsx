import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb5rk3bvp.css';
import '../../css/z/znbsnpbaf.css';
import '../../css/r/rprkwsb7g.css';
import '../../css/d/d0higibga.css';
import '../../css/p/pbkvvoorg.css';
import '../../css/b/betnfdb8x.css';
import '../../css/d/d1pb24eaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cb5rk3bvp wm-shadow"/><path class="znbsnpbaf"/><path class="rprkwsb7g"/><path class="d0higibga"/><path class="pbkvvoorg"/><path class="betnfdb8x"/><path class="d1pb24eaj wm-shine"/></g>`,
		"fallback": "withicons-luxe:square-dashed",
	});
}

export default Component;
