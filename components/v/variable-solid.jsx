import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7y6_lbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7y6_lbwe"/>`,
		"fallback": "heroicons:variable-solid",
	});
}

export default Component;
