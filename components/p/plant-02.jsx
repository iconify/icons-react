import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ea4sq7b7c.css';
import '../../css/i/ie_xilbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ea4sq7b7c"/><path class="ie_xilbme"/></g>`,
		"fallback": "hugeicons:plant-02",
	});
}

export default Component;
