import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3swzzy8r.css';
import '../../css/b/b2_3ypb7j.css';
import '../../css/u/uxdt2um9m.css';
import '../../css/i/iw25-fbib.css';
import '../../css/l/ltc6sfbri.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x3swzzy8r"/><path clip-rule="evenodd" class="b2_3ypb7j"/><path clip-rule="evenodd" class="uxdt2um9m"/><path clip-rule="evenodd" class="iw25-fbib"/><path class="ltc6sfbri"/></g>`,
		"fallback": "glyphs-poly:ship-water",
	});
}

export default Component;
