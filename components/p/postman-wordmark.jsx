import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsnzj2bcg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsnzj2bcg"/>`,
		"fallback": "devicon-plain:postman-wordmark",
	});
}

export default Component;
