import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2qhvxbop.css';
import '../../css/y/yeh0umb4r.css';
import '../../css/d/dl30k4pxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c2qhvxbop"/><path class="yeh0umb4r"/><path class="dl30k4pxw"/></g>`,
		"fallback": "hugeicons:wallet-02",
	});
}

export default Component;
