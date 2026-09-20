import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbuqugbjd.css';
import '../../css/t/td5ambbwi.css';
import '../../css/h/hm_cqf57b.css';
import '../../css/m/m5vokcche.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zbuqugbjd"/><path clip-rule="evenodd" class="td5ambbwi"/><path clip-rule="evenodd" class="hm_cqf57b"/><path class="m5vokcche"/></g>`,
		"fallback": "solar:server-square-cloud-bold",
	});
}

export default Component;
