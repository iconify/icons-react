import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oeookeb1a.css';
import '../../css/t/tx58sukui.css';
import '../../css/b/b1io35pet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oeookeb1a"/><path class="tx58sukui"/><path class="b1io35pet"/></g>`,
		"fallback": "hugeicons:shopify",
	});
}

export default Component;
