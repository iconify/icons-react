import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxetsgolg.css';
import '../../css/a/aa1685piq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pxetsgolg"/><path class="aa1685piq"/></g>`,
		"fallback": "streamline-sharp:pet-friendly-hotel",
	});
}

export default Component;
