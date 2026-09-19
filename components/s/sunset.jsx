import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bva61xs7d.css';
import '../../css/k/kay6ejznq.css';
import '../../css/o/ob0sf-chj.css';
import '../../css/l/l16uqqbgk.css';
import '../../css/x/xx4xdjbdq.css';
import '../../css/c/cjb2v54hb.css';
import '../../css/b/barx9jajj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bva61xs7d"/><path class="kay6ejznq"/><path clip-rule="evenodd" class="ob0sf-chj"/><path class="l16uqqbgk"/><path class="xx4xdjbdq"/><path class="cjb2v54hb"/><path class="barx9jajj"/></g>`,
		"fallback": "glyphs-poly:sunset",
	});
}

export default Component;
