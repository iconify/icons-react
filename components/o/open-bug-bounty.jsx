import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml_yo8qyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml_yo8qyv"/>`,
		"fallback": "thesvg-color:open-bug-bounty",
	});
}

export default Component;
