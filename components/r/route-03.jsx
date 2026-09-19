import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-tmnrxzi.css';
import '../../css/i/ie85wyr6c.css';
import '../../css/n/nllz_8b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="z-tmnrxzi"/><path class="ie85wyr6c"/><path class="nllz_8b7x"/></g>`,
		"fallback": "hugeicons:route-03",
	});
}

export default Component;
