import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chst1zbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chst1zbat"/>`,
		"fallback": "lucide:signpost",
	});
}

export default Component;
