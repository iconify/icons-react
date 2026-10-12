import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wezgm_h4w.css';
import '../../css/s/sbasrbbib.css';
import '../../css/z/z92lvuenp.css';
import '../../css/c/crg_ojbbn.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wezgm_h4w"/><path class="sbasrbbib"/><path class="z92lvuenp"/><path class="crg_ojbbn"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:pylon-x-48",
	});
}

export default Component;
