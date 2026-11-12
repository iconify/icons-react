import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iedyk4l4k.css';
import '../../css/x/xfes82bvz.css';
import '../../css/r/rzokr9xwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iedyk4l4k"/><path class="xfes82bvz"/><path class="rzokr9xwl"/>`,
		"fallback": "selfhst:ksuite-swisstransfer-light",
	});
}

export default Component;
