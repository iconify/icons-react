import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txxkrmb0q.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txxkrmb0q"/>`,
		"fallback": "fa6-solid:volume-xmark",
	});
}

export default Component;
