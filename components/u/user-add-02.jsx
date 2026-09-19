import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghya2pbow.css';
import '../../css/r/r9w8uwb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ghya2pbow"/><path class="r9w8uwb6p"/></g>`,
		"fallback": "hugeicons:user-add-02",
	});
}

export default Component;
