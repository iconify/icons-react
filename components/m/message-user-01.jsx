import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pft8uq5xe.css';
import '../../css/p/puswatsjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pft8uq5xe"/><path class="puswatsjm"/></g>`,
		"fallback": "hugeicons:message-user-01",
	});
}

export default Component;
