import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ippf6z_2l.css';
import '../../css/c/cmogpacta.css';
import '../../css/f/fkxjvlbam.css';
import '../../css/e/ezb3ff6ma.css';
import '../../css/a/a3b2f1bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ippf6z_2l wm-k"/><path class="cmogpacta wm-a"/><path class="fkxjvlbam wm-shadow"/><path class="ezb3ff6ma wm-k"/><path class="a3b2f1bep wm-a"/></g>`,
		"fallback": "withicons:list-music-engrave",
	});
}

export default Component;
