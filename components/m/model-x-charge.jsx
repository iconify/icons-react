import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7pr4cc1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7pr4cc1b"/>`,
		"fallback": "cbi:model-x-charge",
	});
}

export default Component;
