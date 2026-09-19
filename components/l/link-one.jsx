import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rt865acza.css';
import '../../css/j/jdrjpibrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rt865acza"/><path class="jdrjpibrv"/></g>`,
		"fallback": "icon-park-outline:link-one",
	});
}

export default Component;
