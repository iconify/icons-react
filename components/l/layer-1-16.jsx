import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6k7gcc2m.css';
import '../../css/h/hdn7b_0el.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6k7gcc2m"/><path class="hdn7b_0el"/>`,
		"fallback": "qlementine-icons:layer-1-16",
	});
}

export default Component;
