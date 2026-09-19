import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my-29jn8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my-29jn8i"/>`,
		"fallback": "gridicons:list-checkmark",
	});
}

export default Component;
