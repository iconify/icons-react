import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgugneb_n.css';
import '../../css/x/x141tmu0b.css';
import '../../css/t/tvgnlnb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dgugneb_n"/><path class="x141tmu0b"/><path class="tvgnlnb2f"/></g>`,
		"fallback": "hugeicons:payment-success-01",
	});
}

export default Component;
