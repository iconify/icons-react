import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/to0mp9xmp.css';
import '../../css/l/le01h4bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="to0mp9xmp"/><path class="le01h4bll"/></g>`,
		"fallback": "hugeicons:saturn-01",
	});
}

export default Component;
