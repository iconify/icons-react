import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ako9bor.css';
import '../../css/j/j7dc5ce9d.css';
import '../../css/o/osr-a-9hs.css';
import '../../css/z/z00q1md1i.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/m/m_pbrkb4d.css';
import '../../css/k/k9-ti5bce.css';
import '../../css/l/lvl5peb3q.css';
import '../../css/h/h4x9xhedr.css';
import '../../css/e/ek4g5pbst.css';
import '../../css/y/y-vhmpusf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ako9bor"/><path class="j7dc5ce9d"/><path class="osr-a-9hs"/><path class="z00q1md1i"/><g class="dcqdxh5zc"><path class="m_pbrkb4d"/><path class="k9-ti5bce"/></g><path class="lvl5peb3q"/><path class="h4x9xhedr"/><path class="ek4g5pbst"/><path class="y-vhmpusf"/>`,
		"fallback": "openmoji:rescue-workers-helmet",
	});
}

export default Component;
