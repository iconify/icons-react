import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzyk9jbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzyk9jbdc"/>`,
		"fallback": "uit:refresh",
	});
}

export default Component;
