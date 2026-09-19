import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1by6sb-u.css';
import '../../css/h/hcu_kfy7h.css';
import '../../css/o/opmk2-vlj.css';
import '../../css/q/qzs_3vcvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1by6sb-u"/><path class="hcu_kfy7h"/><path class="opmk2-vlj"/><path class="qzs_3vcvz"/></g>`,
		"fallback": "glyphs:walking-duo",
	});
}

export default Component;
