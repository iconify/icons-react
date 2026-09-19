import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-m-0jh-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-m-0jh-f"/>`,
		"fallback": "bxs:sort-alt",
	});
}

export default Component;
