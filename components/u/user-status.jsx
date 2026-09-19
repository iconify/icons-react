import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9_d-n63m.css';
import '../../css/w/wkm6c6j9i.css';
import '../../css/f/fj697fbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9_d-n63m"/><path class="wkm6c6j9i"/><path class="fj697fbfn"/></g>`,
		"fallback": "hugeicons:user-status",
	});
}

export default Component;
