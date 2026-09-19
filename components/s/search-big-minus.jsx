import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd6gj6bbb.css';
import '../../css/o/o17bt0bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd6gj6bbb"/><path class="o17bt0bdu"/>`,
		"fallback": "boxicons:search-big-minus",
	});
}

export default Component;
