import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wp0beln3c.css';
import '../../css/v/viz6ex4le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wp0beln3c"/><path class="viz6ex4le"/></g>`,
		"fallback": "hugeicons:login-01",
	});
}

export default Component;
