import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/buu8rsq2s.css';
import '../../css/n/nslbg6b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="buu8rsq2s"/><path class="nslbg6b9y"/></g>`,
		"fallback": "hugeicons:touch-interaction-02",
	});
}

export default Component;
