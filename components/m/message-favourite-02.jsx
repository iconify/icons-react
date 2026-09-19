import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x-a911bos.css';
import '../../css/e/e_7yw6uch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x-a911bos"/><path class="e_7yw6uch"/></g>`,
		"fallback": "hugeicons:message-favourite-02",
	});
}

export default Component;
