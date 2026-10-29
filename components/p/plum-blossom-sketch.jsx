import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o14n8cc4q.css';
import '../../css/r/ruzx8ebfp.css';
import '../../css/w/w7p7uxb7d.css';
import '../../css/z/zle4_sbjk.css';
import '../../css/o/ofm816o3p.css';
import '../../css/j/ju-940xbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o14n8cc4q wm-k"/><path class="ruzx8ebfp wm-k"/><path class="w7p7uxb7d wm-a"/><path class="wm-a zle4_sbjk"/><path class="ofm816o3p wm-a"/><circle class="ju-940xbu wm-s"/></g>`,
		"fallback": "withicons:plum-blossom-sketch",
	});
}

export default Component;
