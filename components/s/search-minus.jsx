import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9vxdh5en.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9vxdh5en"/>`,
		"fallback": "pajamas:search-minus",
	});
}

export default Component;
