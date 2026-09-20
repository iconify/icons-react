import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhzs0bban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhzs0bban"/>`,
		"fallback": "streamline-ultimate:trends-torch",
	});
}

export default Component;
