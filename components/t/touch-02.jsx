import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbst9ofjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbst9ofjy"/>`,
		"fallback": "hugeicons:touch-02",
	});
}

export default Component;
