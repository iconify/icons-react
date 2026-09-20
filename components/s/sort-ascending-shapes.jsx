import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ligmv2brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ligmv2brr"/>`,
		"fallback": "tabler:sort-ascending-shapes",
	});
}

export default Component;
