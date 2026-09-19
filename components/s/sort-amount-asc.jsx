import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-2li_llf.css';
import '../../css/n/n9o42e7zi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-2li_llf"/><path class="n9o42e7zi"/>`,
		"fallback": "icomoon-free:sort-amount-asc",
	});
}

export default Component;
