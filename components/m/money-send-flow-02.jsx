import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2iw4076h.css';
import '../../css/a/a905mbiux.css';
import '../../css/e/ecgr1wb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2iw4076h"/><path class="a905mbiux"/><path class="ecgr1wb5p"/></g>`,
		"fallback": "hugeicons:money-send-flow-02",
	});
}

export default Component;
