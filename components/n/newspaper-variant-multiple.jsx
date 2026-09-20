import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be2v6wbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be2v6wbjq"/>`,
		"fallback": "mdi:newspaper-variant-multiple",
	});
}

export default Component;
