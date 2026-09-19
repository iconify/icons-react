import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k89cfmtkm.css';
import '../../css/j/jvbzfrb1r.css';
import '../../css/d/dsgw4pnpv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k89cfmtkm"/><path class="jvbzfrb1r"/><path class="dsgw4pnpv"/></g>`,
		"fallback": "glyphs:sofa-duo",
	});
}

export default Component;
