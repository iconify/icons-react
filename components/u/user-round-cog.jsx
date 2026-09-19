import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1aljrw_l.css';
import '../../css/a/afo0ombrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h1aljrw_l"/><path class="afo0ombrd"/></g>`,
		"fallback": "hugeicons:user-round-cog",
	});
}

export default Component;
