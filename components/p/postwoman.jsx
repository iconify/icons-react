import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7gqf0y9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7gqf0y9i"/>`,
		"fallback": "cib:postwoman",
	});
}

export default Component;
