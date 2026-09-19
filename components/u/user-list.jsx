import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nc7k1eb2j.css';
import '../../css/g/ghya2pbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nc7k1eb2j"/><circle class="ghya2pbow"/></g>`,
		"fallback": "hugeicons:user-list",
	});
}

export default Component;
