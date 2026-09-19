import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh6fk_rhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh6fk_rhg"/>`,
		"fallback": "boxicons:search-big",
	});
}

export default Component;
