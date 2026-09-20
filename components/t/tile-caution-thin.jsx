import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhm5ifbce.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhm5ifbce"/>`,
		"fallback": "memory:tile-caution-thin",
	});
}

export default Component;
