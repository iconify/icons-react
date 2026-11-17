import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ra6lu9bvl.css';
import '../../css/p/p5abvv-ay.css';
import '../../css/y/yok835bum.css';
import '../../css/v/v908osbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ra6lu9bvl"/><path class="p5abvv-ay"/><path class="yok835bum"/><path class="v908osbqn"/></g>`,
		"fallback": "matita:refresh-ccw",
	});
}

export default Component;
