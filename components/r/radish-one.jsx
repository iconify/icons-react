import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uiuyxo1yk.css';
import '../../css/m/m9ovsacva.css';
import '../../css/k/km64vnbvm.css';
import '../../css/o/oskonbbeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uiuyxo1yk"/><path class="m9ovsacva"/><path class="km64vnbvm"/><path class="oskonbbeh"/></g>`,
		"fallback": "icon-park-outline:radish-one",
	});
}

export default Component;
