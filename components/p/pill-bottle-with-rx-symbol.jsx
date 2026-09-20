import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-939gw4u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-939gw4u"/>`,
		"fallback": "pinhead:pill-bottle-with-rx-symbol",
	});
}

export default Component;
