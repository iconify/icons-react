import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rs1g-shrt.css';
import '../../css/q/q63igh2hi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rs1g-shrt"/><path class="q63igh2hi"/></g>`,
		"fallback": "icon-park-solid:take-off-one",
	});
}

export default Component;
