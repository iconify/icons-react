import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gn6miabce.css';
import '../../css/t/t7-3-qbad.css';
import '../../css/i/igk2wisce.css';
import '../../css/y/ysiww79nn.css';
import '../../css/i/i9tasabhu.css';
import '../../css/n/n8h22mt3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gn6miabce wm-k"/><path class="t7-3-qbad wm-k"/><path class="igk2wisce wm-k"/><path class="wm-s ysiww79nn"/><path class="i9tasabhu wm-s"/><path class="n8h22mt3n wm-s"/></g>`,
		"fallback": "withicons:user-pen-sketch",
	});
}

export default Component;
