import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9ax1cc5k.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9ax1cc5k"/>`,
		"fallback": "fa:times-circle",
	});
}

export default Component;
