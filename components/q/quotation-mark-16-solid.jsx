import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdejg98sk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdejg98sk"/>`,
		"fallback": "sidekickicons:quotation-mark-16-solid",
	});
}

export default Component;
