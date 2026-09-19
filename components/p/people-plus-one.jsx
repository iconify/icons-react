import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xiq54obrr.css';
import '../../css/c/ctp68-ple.css';
import '../../css/n/nvnwx-40l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xiq54obrr"/><path clip-rule="evenodd" class="ctp68-ple"/><path class="nvnwx-40l"/></g>`,
		"fallback": "icon-park-solid:people-plus-one",
	});
}

export default Component;
