import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk9-heb8s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk9-heb8s"/>`,
		"fallback": "pinhead:target",
	});
}

export default Component;
