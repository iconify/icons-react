import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqzdj6p6z.css';
import '../../css/i/ib_0vib5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bqzdj6p6z"/><path class="ib_0vib5x"/></g>`,
		"fallback": "iconoir:two-seater-sofa",
	});
}

export default Component;
