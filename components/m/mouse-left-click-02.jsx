import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vwfj18vvs.css';
import '../../css/v/v95kopftk.css';
import '../../css/n/neg6k6x2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vwfj18vvs"/><path class="v95kopftk"/><circle class="neg6k6x2d"/></g>`,
		"fallback": "hugeicons:mouse-left-click-02",
	});
}

export default Component;
