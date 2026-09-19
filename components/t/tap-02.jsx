import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-_yemb4e.css';
import '../../css/l/lwxr_bbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d-_yemb4e"/><path class="lwxr_bbjv"/></g>`,
		"fallback": "hugeicons:tap-02",
	});
}

export default Component;
