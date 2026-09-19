import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl4b96bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl4b96bkw"/>`,
		"fallback": "hugeicons:sorting-up",
	});
}

export default Component;
