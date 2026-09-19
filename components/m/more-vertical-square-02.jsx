import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pztf3lfwa.css';
import '../../css/x/xp_9kjcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pztf3lfwa"/><path class="xp_9kjcys"/></g>`,
		"fallback": "hugeicons:more-vertical-square-02",
	});
}

export default Component;
