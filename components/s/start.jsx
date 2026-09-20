import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-em6zb2o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-em6zb2o"/>`,
		"fallback": "raphael:start",
	});
}

export default Component;
