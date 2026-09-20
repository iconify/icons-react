import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eib1g-bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eib1g-bgd"/>`,
		"fallback": "lucide:play-off",
	});
}

export default Component;
