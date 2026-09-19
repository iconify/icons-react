import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhls-y5sy.css';

const viewBox = {"width":1472,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhls-y5sy"/>`,
		"fallback": "vs:mobile",
	});
}

export default Component;
