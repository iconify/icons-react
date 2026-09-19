import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkrlu3b7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkrlu3b7c"/>`,
		"fallback": "formkit:snapchat",
	});
}

export default Component;
