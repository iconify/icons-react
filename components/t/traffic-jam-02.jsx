import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijbv10b3u.css';
import '../../css/z/zyit0rs6g.css';
import '../../css/z/z7nlpshuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ijbv10b3u"/><path class="zyit0rs6g"/><path class="z7nlpshuv"/></g>`,
		"fallback": "hugeicons:traffic-jam-02",
	});
}

export default Component;
