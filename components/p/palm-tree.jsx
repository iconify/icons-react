import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziv56acgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziv56acgs"/>`,
		"fallback": "noviair-light:palm-tree",
	});
}

export default Component;
