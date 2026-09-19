import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnxs2db_g.css';
import '../../css/h/hu-yh35fp.css';
import '../../css/w/wymwwibtz.css';
import '../../css/h/hkp5wnboq.css';
import '../../css/n/n_mm0zdwd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hnxs2db_g"/><path class="hu-yh35fp"/><path class="wymwwibtz"/><path class="hkp5wnboq"/><path class="n_mm0zdwd"/></g>`,
		"fallback": "glyphs:target-pointer-duo",
	});
}

export default Component;
