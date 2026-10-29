import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ih6qqcvxi.css';
import '../../css/c/ckiijib5f.css';
import '../../css/c/ct7tzk2gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ih6qqcvxi"/><path class="ckiijib5f"/><path class="ct7tzk2gs"/></g>`,
		"fallback": "withicons:trophy-sketch",
	});
}

export default Component;
