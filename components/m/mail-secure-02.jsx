import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/f/f-i4hhqkf.css';
import '../../css/c/crjyjma5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="f-i4hhqkf"/><path class="crjyjma5k"/></g>`,
		"fallback": "hugeicons:mail-secure-02",
	});
}

export default Component;
