import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn4vx2bme.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn4vx2bme"/>`,
		"fallback": "fa6-solid:road-circle-xmark",
	});
}

export default Component;
