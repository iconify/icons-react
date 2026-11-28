import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spyhg9e6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spyhg9e6n"/>`,
		"fallback": "noviair-light:pill-plus",
	});
}

export default Component;
