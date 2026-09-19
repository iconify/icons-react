import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iytdgvefu.css';
import '../../css/i/i103ase8k.css';
import '../../css/y/y0uc2-b4b.css';
import '../../css/y/yvqa4423l.css';
import '../../css/b/bhf7x1b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="iytdgvefu"/><path class="i103ase8k"/><path class="y0uc2-b4b"/><path class="yvqa4423l"/><path class="bhf7x1b4w"/></g>`,
		"fallback": "hugeicons:kettle",
	});
}

export default Component;
