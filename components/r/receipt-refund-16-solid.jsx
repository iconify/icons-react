import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o45em4bmv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o45em4bmv"/>`,
		"fallback": "heroicons:receipt-refund-16-solid",
	});
}

export default Component;
