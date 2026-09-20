import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfnhaupzo.css';
import '../../css/i/im33hrbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bfnhaupzo"/><path class="im33hrbid"/></g>`,
		"fallback": "mynaui:ribbon",
	});
}

export default Component;
