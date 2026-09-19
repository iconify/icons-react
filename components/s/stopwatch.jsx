import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmk826btk.css';
import '../../css/m/mpr30bb4r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmk826btk"/><path class="mpr30bb4r"/>`,
		"fallback": "ep:stopwatch",
	});
}

export default Component;
