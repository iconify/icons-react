import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2jemxbtx.css';
import '../../css/h/hb-mrxbke.css';
import '../../css/i/iu6q92b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v2jemxbtx"/><path class="hb-mrxbke"/><path class="iu6q92b1e"/></g>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-circle-app-2",
	});
}

export default Component;
