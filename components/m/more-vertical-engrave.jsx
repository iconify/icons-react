import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nrrik9bat.css';
import '../../css/a/azil_odjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nrrik9bat"/><path class="azil_odjc"/></g>`,
		"fallback": "withicons:more-vertical-engrave",
	});
}

export default Component;
