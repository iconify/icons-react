import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp-1s5bjr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp-1s5bjr"/>`,
		"fallback": "dashicons:performance",
	});
}

export default Component;
