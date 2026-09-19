import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wfx6i99th.css';
import '../../css/n/nkkh7xczj.css';
import '../../css/m/mo1bhs9ao.css';
import '../../css/i/iidcw5brz.css';
import '../../css/d/d03ao8bzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="wfx6i99th"/><path class="nkkh7xczj"/><path class="mo1bhs9ao"/><path class="iidcw5brz"/><path class="d03ao8bzs"/></g>`,
		"fallback": "icon-park:stopwatch-start",
	});
}

export default Component;
