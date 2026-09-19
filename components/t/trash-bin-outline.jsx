import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-twxbb6x.css';
import '../../css/z/zt62pibkv.css';
import '../../css/f/fb6cqib6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-twxbb6x"/><rect class="zt62pibkv"/><path class="fb6cqib6n"/>`,
		"fallback": "ion:trash-bin-outline",
	});
}

export default Component;
