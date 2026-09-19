import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwa5up2ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwa5up2ml"/>`,
		"fallback": "boxicons:polygon",
	});
}

export default Component;
