import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l78wqky7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l78wqky7y"/>`,
		"fallback": "ci:search",
	});
}

export default Component;
