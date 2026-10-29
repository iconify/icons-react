import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mthemujna.css';
import '../../css/o/omzxvh99k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mthemujna wm-k"/><path class="omzxvh99k wm-a"/></g>`,
		"fallback": "withicons:voicemail-sketch",
	});
}

export default Component;
