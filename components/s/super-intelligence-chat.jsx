import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbugvpboz.css';
import '../../css/b/boxw5abxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bbugvpboz"/><path class="boxw5abxc"/></g>`,
		"fallback": "hugeicons:super-intelligence-chat",
	});
}

export default Component;
