import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhfnh-n6v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhfnh-n6v"/>`,
		"fallback": "pinhead:vase",
	});
}

export default Component;
