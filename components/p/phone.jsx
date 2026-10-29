import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pt4omdv6g.css';
import '../../css/g/g5k-e0bcu.css';
import '../../css/f/fuxp55b0d.css';
import '../../css/b/b6wecy-ij.css';
import '../../css/e/elxa067pa.css';
import '../../css/q/qnqcbzokg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pt4omdv6g wm-shadow"/><path class="g5k-e0bcu"/><path class="fuxp55b0d"/><path class="b6wecy-ij"/><path class="elxa067pa wm-shine"/><path class="qnqcbzokg wm-deco"/></g>`,
		"fallback": "withicons-sticker:phone",
	});
}

export default Component;
