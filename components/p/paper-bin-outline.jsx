import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s64hfearz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s64hfearz"/>`,
		"fallback": "solar:paper-bin-outline",
	});
}

export default Component;
