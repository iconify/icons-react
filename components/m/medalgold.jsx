import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj95oqvmv.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj95oqvmv"/>`,
		"fallback": "whh:medalgold",
	});
}

export default Component;
