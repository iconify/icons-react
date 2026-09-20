import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuqfpcnzl.css';
import '../../css/t/t_qegy7zv.css';
import '../../css/f/f80mbrbed.css';
import '../../css/j/jf0tcpneg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/pjai00bft.css';
import '../../css/y/y6_17kbeg.css';
import '../../css/f/fjva3acxj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuqfpcnzl"/><path class="t_qegy7zv"/><path class="f80mbrbed"/><path class="jf0tcpneg"/><g class="ij2x_72vy"><path class="pjai00bft"/><path class="y6_17kbeg"/><path class="fjva3acxj"/></g>`,
		"fallback": "openmoji:newspaper",
	});
}

export default Component;
