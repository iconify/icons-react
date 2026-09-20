import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6spdsbgb.css';
import '../../css/r/rm9mgg4hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i6spdsbgb"/><path class="rm9mgg4hf"/></g>`,
		"fallback": "solar:sort-horizontal-broken",
	});
}

export default Component;
