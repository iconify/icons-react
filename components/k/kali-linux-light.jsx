import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzj-g5bxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzj-g5bxg"/>`,
		"fallback": "selfhst:kali-linux-light",
	});
}

export default Component;
