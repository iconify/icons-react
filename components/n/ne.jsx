import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oal3nmb3w.css';
import '../../css/y/ytfczk__j.css';
import '../../css/w/wwbe5-b4m.css';
import '../../css/x/x1ea6xf3p.css';

const viewBox = {"width":301,"height":259};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oal3nmb3w"/><path class="ytfczk__j"/><path class="wwbe5-b4m"/><circle class="x1ea6xf3p"/></g>`,
		"fallback": "cif:ne",
	});
}

export default Component;
