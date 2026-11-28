import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbp5g-0ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbp5g-0ub"/>`,
		"fallback": "noviair:store-clock",
	});
}

export default Component;
