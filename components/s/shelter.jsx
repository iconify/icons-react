import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lffn35k3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lffn35k3c"/>`,
		"fallback": "pinhead:shelter",
	});
}

export default Component;
