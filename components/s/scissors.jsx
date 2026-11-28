import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gjm9rv0gq.css';
import '../../css/e/etsx7fu9r.css';
import '../../css/f/fzhcv43_c.css';
import '../../css/r/r4qmh52-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gjm9rv0gq"/><path class="etsx7fu9r"/><path class="fzhcv43_c"/><path class="r4qmh52-t"/></g>`,
		"fallback": "iconaut:scissors",
	});
}

export default Component;
