import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgbwyl0oj.css';
import '../../css/z/zigsfjb_g.css';
import '../../css/s/s07rpetsy.css';
import '../../css/v/v-dy6pbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgbwyl0oj"/><path class="zigsfjb_g"/><path class="s07rpetsy"/><path class="v-dy6pbde"/>`,
		"fallback": "energy-icons:sliders-48",
	});
}

export default Component;
