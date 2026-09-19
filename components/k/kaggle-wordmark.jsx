import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjesxm3-v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjesxm3-v"/>`,
		"fallback": "devicon:kaggle-wordmark",
	});
}

export default Component;
