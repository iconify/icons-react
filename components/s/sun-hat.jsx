import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t92oe3bkc.css';
import '../../css/i/i18zfbb0s.css';
import '../../css/j/j5_rsh35x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t92oe3bkc"/><path class="i18zfbb0s"/><path class="j5_rsh35x"/></g>`,
		"fallback": "icon-park-solid:sun-hat",
	});
}

export default Component;
