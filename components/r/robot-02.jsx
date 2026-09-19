import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8-2vl3ci.css';
import '../../css/k/kh86v1ben.css';
import '../../css/t/trc6hlbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m8-2vl3ci"/><circle class="kh86v1ben"/><path class="trc6hlbhq"/></g>`,
		"fallback": "hugeicons:robot-02",
	});
}

export default Component;
