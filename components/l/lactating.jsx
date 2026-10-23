import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxbjfc6fk.css';
import '../../css/t/t-sghzbsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lxbjfc6fk"/><path class="t-sghzbsj"/></g>`,
		"fallback": "healthicons:lactating",
	});
}

export default Component;
