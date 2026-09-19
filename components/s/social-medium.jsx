import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-xlhab4j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-xlhab4j"/>`,
		"fallback": "foundation:social-medium",
	});
}

export default Component;
