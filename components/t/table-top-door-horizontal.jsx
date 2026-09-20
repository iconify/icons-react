import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swew10n1l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swew10n1l"/>`,
		"fallback": "memory:table-top-door-horizontal",
	});
}

export default Component;
