import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqcz19bjb.css';
import '../../css/l/l-gopggdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqcz19bjb"/><path class="l-gopggdg"/></g>`,
		"fallback": "covid:transmission-virus-touch-hand-2",
	});
}

export default Component;
