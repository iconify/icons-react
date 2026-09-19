import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zbsa-ujvj.css';
import '../../css/j/j_gspgb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zbsa-ujvj"/><path class="j_gspgb6o"/></g>`,
		"fallback": "icon-park-outline:kettle-one",
	});
}

export default Component;
