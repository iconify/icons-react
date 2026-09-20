import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buto0mbqx.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buto0mbqx"/>`,
		"fallback": "maki:restaurant-seafood-11",
	});
}

export default Component;
