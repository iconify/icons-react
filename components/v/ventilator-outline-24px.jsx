import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hcwqt1boa.css';
import '../../css/q/qw94g-6ki.css';
import '../../css/m/mr5dngbcl.css';
import '../../css/h/hliflxb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hcwqt1boa"/><path class="qw94g-6ki"/><path clip-rule="evenodd" class="mr5dngbcl"/><path class="hliflxb2s"/></g>`,
		"fallback": "healthicons:ventilator-outline-24px",
	});
}

export default Component;
