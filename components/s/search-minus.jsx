import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fabh_rbkv.css';
import '../../css/l/lk-ht19xt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fabh_rbkv"/><path class="lk-ht19xt"/>`,
		"fallback": "vaadin:search-minus",
	});
}

export default Component;
