import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lme84c1eo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lme84c1eo"/>`,
		"fallback": "radix-icons:mixer-horizontal",
	});
}

export default Component;
