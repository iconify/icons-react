import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2vu9_i2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2vu9_i2i"/>`,
		"fallback": "icon-park-outline:parallelogram",
	});
}

export default Component;
