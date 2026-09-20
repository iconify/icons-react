import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/coegiw3wb.css';
import '../../css/b/b4ez9bbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="coegiw3wb"/><path class="b4ez9bbtg"/></g>`,
		"fallback": "streamline-ultimate:vectors-pen-add-1",
	});
}

export default Component;
