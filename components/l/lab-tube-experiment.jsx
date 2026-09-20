import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb1bzqbap.css';
import '../../css/g/gytetixqk.css';
import '../../css/z/zq4keobdv.css';
import '../../css/p/p2uhtmb8k.css';
import '../../css/s/sq46tccqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb1bzqbap"/><path class="gytetixqk"/><path class="zq4keobdv"/><path class="p2uhtmb8k"/><path class="sq46tccqm"/></g>`,
		"fallback": "streamline-ultimate-color:lab-tube-experiment",
	});
}

export default Component;
