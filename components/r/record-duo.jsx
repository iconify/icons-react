import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/o/orpw_qu3f.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/w/wk9-pwuua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="orpw_qu3f"/><path class="w4vxnac6h"/><path class="wk9-pwuua"/></g>`,
		"fallback": "glyphs:record-duo",
	});
}

export default Component;
