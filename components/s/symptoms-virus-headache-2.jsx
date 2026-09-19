import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dz7ly-bcm.css';
import '../../css/v/vkc5btb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dz7ly-bcm"/><path class="vkc5btb5m"/></g>`,
		"fallback": "covid:symptoms-virus-headache-2",
	});
}

export default Component;
