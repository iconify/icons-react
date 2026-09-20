import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmd7ifbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmd7ifbkh"/>`,
		"fallback": "ri:sort-number-desc",
	});
}

export default Component;
