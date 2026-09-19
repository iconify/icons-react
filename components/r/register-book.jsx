import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxx0nkbew.css';
import '../../css/s/smaah_ksi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jxx0nkbew"/><path clip-rule="evenodd" class="smaah_ksi"/></g>`,
		"fallback": "healthicons:register-book",
	});
}

export default Component;
