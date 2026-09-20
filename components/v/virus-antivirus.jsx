import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/z/zb1a71t5d.css';
import '../../css/c/cs_h16gic.css';
import '../../css/w/wltldkb9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="wzw7k-iny"/><path class="zb1a71t5d"/><path class="cs_h16gic"/><path class="wltldkb9m"/></g>`,
		"fallback": "streamline-flex-color:virus-antivirus",
	});
}

export default Component;
