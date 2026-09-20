import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/k/kln_lab3u.css';
import '../../css/y/y949pg7uq.css';
import '../../css/s/s0ygpbb2k.css';
import '../../css/j/jszvy22pm.css';
import '../../css/r/r50jkbktv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="kln_lab3u"/><path class="y949pg7uq"/><path class="s0ygpbb2k"/><path clip-rule="evenodd" class="jszvy22pm"/><path class="r50jkbktv"/></g>`,
		"fallback": "streamline-kameleon-color:tease-smiley-duo",
	});
}

export default Component;
