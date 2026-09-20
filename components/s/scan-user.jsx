import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mql6v7yzb.css';
import '../../css/f/ftd68dboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mql6v7yzb"/><path class="ftd68dboz"/></g>`,
		"fallback": "mage:scan-user",
	});
}

export default Component;
