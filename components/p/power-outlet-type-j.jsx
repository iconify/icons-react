import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_rsup5oq.css';
import '../../css/r/r2w7r7b1e.css';
import '../../css/j/jfbs04b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_rsup5oq"/><path class="r2w7r7b1e"/><path class="jfbs04b-h"/></g>`,
		"fallback": "streamline-ultimate:power-outlet-type-j",
	});
}

export default Component;
