import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g8xpz3b0x.css';
import '../../css/b/beo_nnb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g8xpz3b0x"/><rect class="beo_nnb7c"/></g>`,
		"fallback": "reicon:lock-open2",
	});
}

export default Component;
