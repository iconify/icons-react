import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/q/q6bv9r6nh.css';
import '../../css/f/fq06eqbqz.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/o/oe4c91bbg.css';
import '../../css/v/vmhlk0o_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="q6bv9r6nh wm-s"/><path class="fq06eqbqz wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="oe4c91bbg wm-s"/><path class="vmhlk0o_i wm-s"/></g>`,
		"fallback": "withicons:user-clock-engrave",
	});
}

export default Component;
