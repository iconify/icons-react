import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kcg668zpi.css';
import '../../css/i/ig8gsfbeh.css';
import '../../css/e/e9olh2zok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kcg668zpi"/><path class="ig8gsfbeh"/><path class="e9olh2zok"/></g>`,
		"fallback": "icon-park-solid:nested-arrows",
	});
}

export default Component;
