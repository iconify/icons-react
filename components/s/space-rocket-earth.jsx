import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j572khtuf.css';
import '../../css/g/g0i07hw0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j572khtuf"/><path class="g0i07hw0j"/></g>`,
		"fallback": "streamline-ultimate:space-rocket-earth",
	});
}

export default Component;
