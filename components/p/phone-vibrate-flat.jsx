import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxqxy8b7d.css';
import '../../css/h/hywgiubeg.css';
import '../../css/d/dl1squaus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wxqxy8b7d"/><path class="hywgiubeg"/><path clip-rule="evenodd" class="dl1squaus"/></g>`,
		"fallback": "streamline-sharp-color:phone-vibrate-flat",
	});
}

export default Component;
