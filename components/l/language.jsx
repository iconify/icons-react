import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bail9yl5d.css';
import '../../css/b/b3ouqbcbv.css';
import '../../css/z/zr2h3jbqe.css';
import '../../css/f/fxnht-bng.css';
import '../../css/i/i23igd-fw.css';
import '../../css/b/bgjfcp78h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="bail9yl5d wm-shadow"/><path class="b3ouqbcbv"/><path class="zr2h3jbqe"/><path class="fxnht-bng"/><path class="i23igd-fw wm-shine"/><path class="bgjfcp78h wm-deco"/></g>`,
		"fallback": "withicons-sticker:language",
	});
}

export default Component;
