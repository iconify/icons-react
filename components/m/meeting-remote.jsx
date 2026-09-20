import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybt3-tb8r.css';
import '../../css/z/zy6p_hb5h.css';
import '../../css/n/ngtc8_bij.css';
import '../../css/v/v2gayrbrl.css';
import '../../css/w/w_ibdivmi.css';
import '../../css/f/f-tuh0pse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ybt3-tb8r"/><path class="zy6p_hb5h"/><path class="ngtc8_bij"/><path class="v2gayrbrl"/><path class="w_ibdivmi"/><path class="f-tuh0pse"/></g>`,
		"fallback": "streamline-ultimate:meeting-remote",
	});
}

export default Component;
