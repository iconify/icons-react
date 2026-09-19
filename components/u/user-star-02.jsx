import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghya2pbow.css';
import '../../css/q/qlg_-le7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ghya2pbow"/><path class="qlg_-le7r"/></g>`,
		"fallback": "hugeicons:user-star-02",
	});
}

export default Component;
