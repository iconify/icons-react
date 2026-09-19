import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myubtaccl.css';
import '../../css/w/wzrscbbrd.css';
import '../../css/s/sz77vjbtt.css';
import '../../css/w/wgc76mb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myubtaccl"/><path class="wzrscbbrd"/><path class="sz77vjbtt"/><circle class="wgc76mb2m"/>`,
		"fallback": "famicons:walk-sharp",
	});
}

export default Component;
