import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5p3izax.css';
import '../../css/l/l_i_9sbzv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5p3izax"/><path class="l_i_9sbzv"/>`,
		"fallback": "foundation:map",
	});
}

export default Component;
