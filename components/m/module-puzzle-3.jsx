import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiogu7bxw.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/v/vkz_98bpn.css';
import '../../css/m/m49gq0o_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eiogu7bxw"/><path class="sj71gtfbi"/><path class="vkz_98bpn"/><path class="m49gq0o_m"/></g>`,
		"fallback": "streamline-color:module-puzzle-3",
	});
}

export default Component;
