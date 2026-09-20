import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fet8ubbpl.css';
import '../../css/v/vza3idmls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fet8ubbpl"/><path class="vza3idmls"/></g>`,
		"fallback": "streamline-ultimate:mailbox-post",
	});
}

export default Component;
