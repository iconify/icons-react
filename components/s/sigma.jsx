import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7v6m7bjd.css';
import '../../css/i/ibfphwlbh.css';
import '../../css/l/ls2ev_smn.css';
import '../../css/a/aehkirbxj.css';
import '../../css/r/rmauuzbau.css';
import '../../css/g/gdw8bzbhd.css';
import '../../css/g/g6wt0dbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7v6m7bjd wm-shadow"/><path class="ibfphwlbh"/><path class="ls2ev_smn"/><path class="aehkirbxj"/><path class="rmauuzbau"/><path class="gdw8bzbhd wm-shine"/><path class="g6wt0dbas"/>`,
		"fallback": "withicons-plush:sigma",
	});
}

export default Component;
