import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fulicobvs.css';
import '../../css/t/tpoq1772t.css';
import '../../css/h/heivj-bnr.css';
import '../../css/r/re2wkt-rp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fulicobvs"/><path class="tpoq1772t"/><path clip-rule="evenodd" class="heivj-bnr"/><path clip-rule="evenodd" class="re2wkt-rp"/></g>`,
		"fallback": "streamline-plump-color:transparent-flat",
	});
}

export default Component;
