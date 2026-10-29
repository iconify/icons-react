import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ddoztfbry.css';
import '../../css/f/ftse9tv2o.css';
import '../../css/n/nuri-pjqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ddoztfbry wm-k"/><path class="ftse9tv2o wm-k"/><path class="nuri-pjqg wm-a"/></g>`,
		"fallback": "withicons:move-sketch",
	});
}

export default Component;
