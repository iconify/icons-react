import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmv3c7gqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmv3c7gqo"/>`,
		"fallback": "bxs:t-shirt",
	});
}

export default Component;
