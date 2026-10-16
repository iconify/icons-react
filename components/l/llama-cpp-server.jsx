import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkemah_ob.css';
import '../../css/k/kxu75d5ai.css';
import '../../css/c/ca5g-fnfs.css';

const viewBox = {"width":250,"height":250};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vkemah_ob"><path class="kxu75d5ai"/><path class="ca5g-fnfs"/></g>`,
		"fallback": "thesvg-color:llama-cpp-server",
	});
}

export default Component;
