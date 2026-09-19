import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjx20x3-e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjx20x3-e"/>`,
		"fallback": "devicon-plain:safari-wordmark",
	});
}

export default Component;
