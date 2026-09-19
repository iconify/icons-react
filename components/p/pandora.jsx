import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1vl4ab-y.css';

const viewBox = {"width":368,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1vl4ab-y"/>`,
		"fallback": "ps:pandora",
	});
}

export default Component;
