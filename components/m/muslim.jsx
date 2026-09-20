import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/c/cylh-mblg.css';
import '../../css/o/oz_ktlo_m.css';
import '../../css/m/mjmf0tagp.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="cylh-mblg"/><path class="oz_ktlo_m"/><path class="mjmf0tagp"/></g>`,
		"fallback": "streamline-stickies-color:muslim",
	});
}

export default Component;
