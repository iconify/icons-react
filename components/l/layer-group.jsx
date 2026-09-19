import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cvk473l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9cvk473l"/>`,
		"fallback": "fa-solid:layer-group",
	});
}

export default Component;
