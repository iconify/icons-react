import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgugneb_n.css';
import '../../css/c/cwo6nccmi.css';
import '../../css/q/q0lmkjq4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dgugneb_n"/><path class="cwo6nccmi"/><path class="q0lmkjq4i"/></g>`,
		"fallback": "hugeicons:money-remove-01",
	});
}

export default Component;
