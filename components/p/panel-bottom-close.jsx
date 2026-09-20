import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgkc1nqpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgkc1nqpp"/>`,
		"fallback": "keyline-icons:panel-bottom-close",
	});
}

export default Component;
