import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7-l3ptxy.css';
import '../../css/b/bd2-kmgzj.css';
import '../../css/t/t8h1t8byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b7-l3ptxy"/><path class="bd2-kmgzj"/><path class="t8h1t8byf"/></g>`,
		"fallback": "mage:printer",
	});
}

export default Component;
