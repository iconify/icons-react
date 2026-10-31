import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/ppias5f-m.css';
import '../../css/b/bkxgvjb9v.css';
import '../../css/r/r43my2bli.css';
import '../../css/a/a83wz2qox.css';
import '../../css/j/jpex_pbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ppias5f-m"/><path class="bkxgvjb9v wm-shine"/><path class="r43my2bli"/><path class="a83wz2qox"/><path class="jpex_pbvt"/></g>`,
		"fallback": "withicons-kawaii:rolling-pin",
	});
}

export default Component;
