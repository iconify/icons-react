import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttut_pbzv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttut_pbzv"/>`,
		"fallback": "pinhead:plane-top-right",
	});
}

export default Component;
