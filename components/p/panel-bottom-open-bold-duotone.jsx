import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujjms90kd.css';
import '../../css/t/t8u11htbt.css';
import '../../css/j/ju6d6_jqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujjms90kd"/><path class="t8u11htbt"/><path class="ju6d6_jqy"/></g>`,
		"fallback": "solar:panel-bottom-open-bold-duotone",
	});
}

export default Component;
