import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am8phpb_z.css';
import '../../css/l/lq2ck2bit.css';
import '../../css/k/k4f6kjbxw.css';
import '../../css/z/zt53swy0k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am8phpb_z"/><path class="lq2ck2bit"/><path class="k4f6kjbxw"/><path class="zt53swy0k"/></g>`,
		"fallback": "glyphs:temperature-duo",
	});
}

export default Component;
