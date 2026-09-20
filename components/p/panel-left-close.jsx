import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0dqljbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0dqljbix"/>`,
		"fallback": "keyline-icons:panel-left-close",
	});
}

export default Component;
