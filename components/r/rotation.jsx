import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d83v4wwbd.css';
import '../../css/z/z35t4zboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d83v4wwbd"/><path class="z35t4zboz"/></g>`,
		"fallback": "icon-park-outline:rotation",
	});
}

export default Component;
