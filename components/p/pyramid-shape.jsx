import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/d4k84fb8w.css';
import '../../css/l/liehw0htx.css';
import '../../css/a/a3-7_pbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="d4k84fb8w"/><path class="liehw0htx"/><path class="a3-7_pbqx"/></g>`,
		"fallback": "streamline-sharp-color:pyramid-shape",
	});
}

export default Component;
