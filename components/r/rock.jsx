import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pa5opcbgo.css';
import '../../css/p/pvbrq0iat.css';
import '../../css/j/jlvcoldrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pa5opcbgo"/><path class="pvbrq0iat"/><path class="jlvcoldrg"/></g>`,
		"fallback": "icon-park-outline:rock",
	});
}

export default Component;
