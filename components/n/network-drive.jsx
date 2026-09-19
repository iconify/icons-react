import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/idtbkobxl.css';
import '../../css/t/tfx552bzo.css';
import '../../css/w/wfaf1ggge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="idtbkobxl"/><path class="tfx552bzo"/><path class="wfaf1ggge"/></g>`,
		"fallback": "icon-park-solid:network-drive",
	});
}

export default Component;
