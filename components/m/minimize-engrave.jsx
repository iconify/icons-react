import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w55-sjbzg.css';
import '../../css/j/jjh8m7o_m.css';
import '../../css/i/itj0unbfd.css';
import '../../css/v/vw2d3v36t.css';
import '../../css/g/gjffvyjta.css';
import '../../css/z/z2cmsqfjo.css';
import '../../css/m/m8z7zkbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w55-sjbzg wm-k"/><path class="jjh8m7o_m wm-a"/><path class="itj0unbfd wm-shadow"/><path class="vw2d3v36t wm-k"/><path class="gjffvyjta wm-a"/><path class="wm-k z2cmsqfjo"/><path class="m8z7zkbik wm-a"/></g>`,
		"fallback": "withicons:minimize-engrave",
	});
}

export default Component;
