import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ran-smzkp.css';
import '../../css/p/p8eun3bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ran-smzkp"/><path class="p8eun3bzd"/></g>`,
		"fallback": "hugeicons:message-download-02",
	});
}

export default Component;
