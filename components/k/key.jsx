import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2gg3abuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2gg3abuh"/>`,
		"fallback": "noviair-light:key",
	});
}

export default Component;
