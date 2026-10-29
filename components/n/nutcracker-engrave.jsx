import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wqxwhwbjw.css';
import '../../css/t/tvs-qo4vm.css';
import '../../css/o/oh_l5zboi.css';
import '../../css/r/r8y-lxhat.css';
import '../../css/f/f0_omibpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wqxwhwbjw"/><path class="tvs-qo4vm wm-shadow"/><path class="oh_l5zboi"/><path class="r8y-lxhat"/><path class="f0_omibpb"/></g>`,
		"fallback": "withicons:nutcracker-engrave",
	});
}

export default Component;
