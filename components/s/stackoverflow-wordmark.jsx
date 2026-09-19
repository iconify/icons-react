import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyh6tzb5u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyh6tzb5u"/>`,
		"fallback": "devicon-plain:stackoverflow-wordmark",
	});
}

export default Component;
