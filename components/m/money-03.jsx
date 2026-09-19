import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_9gjeb9i.css';
import '../../css/d/dzqmh_brh.css';
import '../../css/g/gi37vtblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a_9gjeb9i"/><path class="dzqmh_brh"/><path class="gi37vtblb"/></g>`,
		"fallback": "hugeicons:money-03",
	});
}

export default Component;
