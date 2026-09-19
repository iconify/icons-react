import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hf-76nbak.css';
import '../../css/q/q0j9tsbql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hf-76nbak"/><path class="q0j9tsbql"/></g>`,
		"fallback": "icon-park-outline:take-off",
	});
}

export default Component;
