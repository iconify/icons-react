import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d5ef0obdu.css';
import '../../css/q/qaoxoacmy.css';
import '../../css/p/ppz_4gikv.css';
import '../../css/y/yhhda8bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d5ef0obdu"/><path class="qaoxoacmy"/><path class="ppz_4gikv"/><path class="yhhda8bfo"/></g>`,
		"fallback": "hugeicons:police-station",
	});
}

export default Component;
