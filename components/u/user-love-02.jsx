import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghya2pbow.css';
import '../../css/x/xf4hhkb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ghya2pbow"/><path class="xf4hhkb-q"/></g>`,
		"fallback": "hugeicons:user-love-02",
	});
}

export default Component;
