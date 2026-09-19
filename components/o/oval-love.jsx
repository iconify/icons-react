import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/ts3bucb9r.css';
import '../../css/c/czvyu3bip.css';
import '../../css/q/q4j5y5ckx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ts3bucb9r"/><path class="czvyu3bip"/><path class="q4j5y5ckx"/></g>`,
		"fallback": "icon-park:oval-love",
	});
}

export default Component;
