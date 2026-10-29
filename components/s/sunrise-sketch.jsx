import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/buezohm7s.css';
import '../../css/f/fa586t8_z.css';
import '../../css/h/hsajntj5k.css';
import '../../css/v/vkn0j2bym.css';
import '../../css/h/hlzyut9fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="buezohm7s wm-k"/><path class="fa586t8_z wm-s"/><path class="hsajntj5k wm-k"/><path class="vkn0j2bym wm-a"/><path class="hlzyut9fw wm-s"/></g>`,
		"fallback": "withicons:sunrise-sketch",
	});
}

export default Component;
