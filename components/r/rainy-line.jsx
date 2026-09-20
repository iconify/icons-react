import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya654m9rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya654m9rx"/>`,
		"fallback": "ri:rainy-line",
	});
}

export default Component;
