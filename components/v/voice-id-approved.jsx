import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yhfey4bak.css';
import '../../css/h/hihu1db0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yhfey4bak"/><path class="hihu1db0i"/></g>`,
		"fallback": "streamline-ultimate:voice-id-approved",
	});
}

export default Component;
