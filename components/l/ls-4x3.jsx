import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/y/yfdjvu8pd.css';
import '../../css/g/gkucm_bdu.css';
import '../../css/c/c0ltoil8c.css';
import '../../css/o/owlk22_ch.css';
import '../../css/q/qslcqt1xy.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="yfdjvu8pd"/><path class="gkucm_bdu"/><path class="c0ltoil8c"/><path class="owlk22_ch"/><path class="qslcqt1xy"/>`,
		"fallback": "flag:ls-4x3",
	});
}

export default Component;
