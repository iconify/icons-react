import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/f/fe_wc6ksk.css';
import '../../css/n/nkwn8kc2v.css';
import '../../css/n/n-ogr3pwq.css';
import '../../css/o/o9of61mvd.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="fe_wc6ksk"/><path class="nkwn8kc2v"/><path class="n-ogr3pwq"/><path class="o9of61mvd"/></g>`,
		"fallback": "streamline-stickies-color:money-coin-2",
	});
}

export default Component;
