import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om2mjlg1o.css';
import '../../css/s/smwypsble.css';
import '../../css/m/mw4ytttly.css';
import '../../css/u/urld98l4o.css';
import '../../css/t/tre18buzd.css';
import '../../css/a/aimn0nbnx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om2mjlg1o"/><path class="smwypsble"/><path clip-rule="evenodd" class="mw4ytttly"/><path class="urld98l4o"/><path class="tre18buzd"/><path clip-rule="evenodd" class="aimn0nbnx"/></g>`,
		"fallback": "glyphs:signal-rod-outline",
	});
}

export default Component;
