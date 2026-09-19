import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7s1monoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7s1monoc"/>`,
		"fallback": "hugeicons:jsx-02",
	});
}

export default Component;
