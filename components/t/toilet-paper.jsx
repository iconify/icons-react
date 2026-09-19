import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcnhuvbnw.css';
import '../../css/n/nnp4uwb7x.css';
import '../../css/m/mtnsjzhxu.css';
import '../../css/k/kc7tjn8cw.css';
import '../../css/d/dau8g7f2c.css';
import '../../css/z/zqvw3abzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bcnhuvbnw"/><path clip-rule="evenodd" class="nnp4uwb7x"/><path clip-rule="evenodd" class="mtnsjzhxu"/><path clip-rule="evenodd" class="kc7tjn8cw"/><path class="dau8g7f2c"/><path clip-rule="evenodd" class="zqvw3abzp"/></g>`,
		"fallback": "healthicons:toilet-paper",
	});
}

export default Component;
