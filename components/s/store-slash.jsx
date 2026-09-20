import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k__cg03cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k__cg03cc"/>`,
		"fallback": "uil:store-slash",
	});
}

export default Component;
