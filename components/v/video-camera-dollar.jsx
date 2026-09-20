import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzsd4cbnd.css';
import '../../css/e/ezcs54baq.css';
import '../../css/p/povdh7q-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzsd4cbnd"/><path class="ezcs54baq"/><path class="povdh7q-j"/></g>`,
		"fallback": "tdesign:video-camera-dollar",
	});
}

export default Component;
