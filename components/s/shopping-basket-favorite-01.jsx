import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-ns11z2a.css';
import '../../css/g/gwkfc5b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-ns11z2a"/><path class="gwkfc5b2m"/></g>`,
		"fallback": "hugeicons:shopping-basket-favorite-01",
	});
}

export default Component;
