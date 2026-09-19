import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vbiabyi_d.css';
import '../../css/b/b0js2ekqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vbiabyi_d"/><path class="b0js2ekqm"/></g>`,
		"fallback": "icon-park-solid:speaker-one",
	});
}

export default Component;
