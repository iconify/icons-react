import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1818y12w.css';
import '../../css/z/zbf4nfbmn.css';
import '../../css/x/xjv1tcbaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a1818y12w"/><path class="zbf4nfbmn"/><path clip-rule="evenodd" class="xjv1tcbaz"/></g>`,
		"fallback": "healthicons:virus-patient-outline",
	});
}

export default Component;
