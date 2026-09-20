import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp0ef7eag.css';
import '../../css/b/bb_1k1bwk.css';
import '../../css/b/blzg_nqww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hp0ef7eag"/><path clip-rule="evenodd" class="bb_1k1bwk"/><path class="blzg_nqww"/></g>`,
		"fallback": "tdesign:secured",
	});
}

export default Component;
