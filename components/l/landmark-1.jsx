import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq4nlabal.css';
import '../../css/f/fmwk-tbtr.css';
import '../../css/a/a1tzygbyc.css';
import '../../css/v/vj3umz3rb.css';
import '../../css/d/d7wcodbdc.css';
import '../../css/q/qpavxnm1l.css';
import '../../css/m/m9flswb-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kq4nlabal"/><path class="fmwk-tbtr"/><path class="a1tzygbyc"/><path clip-rule="evenodd" class="vj3umz3rb"/><path class="d7wcodbdc"/><path class="qpavxnm1l"/><path class="m9flswb-i"/></g>`,
		"fallback": "glyphs-poly:landmark-1",
	});
}

export default Component;
