import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc58z1b_o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc58z1b_o"/>`,
		"fallback": "pinhead:maryland",
	});
}

export default Component;
