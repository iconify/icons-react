import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsfkz5ysl.css';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e7pn7ylvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGmUZuRdkM" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="fsfkz5ysl"/></mask><g mask="url(#SVGmUZuRdkM)" class="nz_20wbpz"><path class="e7pn7ylvm"/></g>`,
		"fallback": "icon-park-outline:upload",
	});
}

export default Component;
