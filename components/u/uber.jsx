import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9er9icpy.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9er9icpy"/>`,
		"fallback": "fa-brands:uber",
	});
}

export default Component;
