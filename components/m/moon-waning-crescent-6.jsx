import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5hql90sc.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5hql90sc"/>`,
		"fallback": "wi:moon-waning-crescent-6",
	});
}

export default Component;
