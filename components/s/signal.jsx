import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t4ya6qb4m.css';
import '../../css/z/zseipds2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t4ya6qb4m"/><path class="wm-deco zseipds2r"/></g>`,
		"fallback": "withicons-kawaii:signal",
	});
}

export default Component;
