import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyp2occig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyp2occig"/>`,
		"fallback": "octicon:ruby-24",
	});
}

export default Component;
