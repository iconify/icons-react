import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lruz6gbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lruz6gbyv"/>`,
		"fallback": "ci:menu-alt-04",
	});
}

export default Component;
