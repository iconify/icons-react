import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diaox2bxh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diaox2bxh"/>`,
		"fallback": "fa6-solid:square-xmark",
	});
}

export default Component;
