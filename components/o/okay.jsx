import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/scu013tui.css';
import '../../css/j/jbj0_8umw.css';
import '../../css/s/s07a-lb1i.css';
import '../../css/i/ico2rabfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="scu013tui"/><path class="jbj0_8umw"/><path class="s07a-lb1i"/><path class="ico2rabfx"/></g>`,
		"fallback": "icon-park-outline:okay",
	});
}

export default Component;
