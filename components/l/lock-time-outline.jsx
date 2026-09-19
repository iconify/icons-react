import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbytaobxq.css';
import '../../css/h/hldc7zb1q.css';
import '../../css/p/pzaakibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbytaobxq"/><path class="hldc7zb1q"/><path clip-rule="evenodd" class="pzaakibfx"/>`,
		"fallback": "basil:lock-time-outline",
	});
}

export default Component;
