import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdlh1ebyi.css';
import '../../css/l/laiy2jm3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tdlh1ebyi"/><path class="laiy2jm3n"/></g>`,
		"fallback": "solar:shuffle-broken",
	});
}

export default Component;
