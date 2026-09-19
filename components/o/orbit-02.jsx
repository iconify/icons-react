import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drnrbe-2t.css';
import '../../css/t/t7cr3_k7i.css';
import '../../css/c/c_zsa6bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="drnrbe-2t"/><path class="t7cr3_k7i"/><path class="c_zsa6bia"/></g>`,
		"fallback": "hugeicons:orbit-02",
	});
}

export default Component;
