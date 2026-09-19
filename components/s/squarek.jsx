import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxnpk2b-o.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxnpk2b-o"/>`,
		"fallback": "whh:squarek",
	});
}

export default Component;
