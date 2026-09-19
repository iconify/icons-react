import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ki_sjffgz.css';
import '../../css/d/dylmm_b7q.css';
import '../../css/b/bpfx7ob2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ki_sjffgz"/><circle class="dylmm_b7q"/><path class="bpfx7ob2c"/></g>`,
		"fallback": "hugeicons:route-off",
	});
}

export default Component;
