import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3g92hbhb.css';
import '../../css/l/l3qz0-bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i3g92hbhb"/><path class="l3qz0-bng"/></g>`,
		"fallback": "reicon:subscription",
	});
}

export default Component;
