import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/c/cxx-f5x-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="cxx-f5x-b"/></g>`,
		"fallback": "hugeicons:mail-add-02",
	});
}

export default Component;
