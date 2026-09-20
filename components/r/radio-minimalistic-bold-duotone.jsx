import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/b/bo1-45bhy.css';
import '../../css/z/z343t6ynq.css';
import '../../css/m/mm-sol1bo.css';
import '../../css/a/al12e2btd.css';
import '../../css/a/a5m1-4_cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="bo1-45bhy"/><path class="z343t6ynq"/><path class="mm-sol1bo"/><path class="al12e2btd"/><path class="a5m1-4_cu"/></g>`,
		"fallback": "solar:radio-minimalistic-bold-duotone",
	});
}

export default Component;
