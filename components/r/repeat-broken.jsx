import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/brc86cc0s.css';
import '../../css/e/epa2j5v2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="brc86cc0s"/><path class="epa2j5v2j"/></g>`,
		"fallback": "solar:repeat-broken",
	});
}

export default Component;
