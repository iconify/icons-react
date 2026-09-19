import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4iqprvyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4iqprvyr"/>`,
		"fallback": "bxs:palette",
	});
}

export default Component;
