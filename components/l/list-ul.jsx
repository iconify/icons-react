import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zetc7ib7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zetc7ib7w"/>`,
		"fallback": "bi:list-ul",
	});
}

export default Component;
