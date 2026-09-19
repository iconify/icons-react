import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed_xxmoki.css';
import '../../css/d/d8t8m2dfl.css';
import '../../css/x/xoewxkryu.css';
import '../../css/d/de2eu9b8o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed_xxmoki"/><path clip-rule="evenodd" class="d8t8m2dfl"/><path class="xoewxkryu"/><path clip-rule="evenodd" class="de2eu9b8o"/></g>`,
		"fallback": "glyphs:playback-speed-outline",
	});
}

export default Component;
