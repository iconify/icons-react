import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu6ju2buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu6ju2buc"/>`,
		"fallback": "keyline-icons:square-arrow-u-turn-right-fill",
	});
}

export default Component;
