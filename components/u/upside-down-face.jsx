import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/h6r38pa2g.css';
import '../../css/l/lt8k0jbcf.css';
import '../../css/z/z0p8c5bey.css';
import '../../css/q/q56tq-blb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="h6r38pa2g"/><path class="lt8k0jbcf"/><path class="z0p8c5bey"/><path class="q56tq-blb"/></g>`,
		"fallback": "icon-park:upside-down-face",
	});
}

export default Component;
