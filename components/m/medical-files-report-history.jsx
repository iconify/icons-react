import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/k/kfewyxs4v.css';
import '../../css/e/en4jdxhqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om8ne5bsn"/><path class="vp5lb0bdv"/><path class="kfewyxs4v"/><path class="en4jdxhqu"/></g>`,
		"fallback": "streamline-color:medical-files-report-history",
	});
}

export default Component;
