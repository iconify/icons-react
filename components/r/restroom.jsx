import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpw5wnbsh.css';
import '../../css/e/etxjw5b5s.css';
import '../../css/c/c_0q9wbay.css';
import '../../css/m/mt_hp_cla.css';
import '../../css/w/w6janv0kp.css';
import '../../css/l/lmwop9blp.css';
import '../../css/e/ecrlwubla.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mpw5wnbsh"/><path clip-rule="evenodd" class="etxjw5b5s"/><path class="c_0q9wbay"/><path class="mt_hp_cla"/><path clip-rule="evenodd" class="w6janv0kp"/><path class="lmwop9blp"/><path class="ecrlwubla"/></g>`,
		"fallback": "glyphs-poly:restroom",
	});
}

export default Component;
