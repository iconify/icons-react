import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmakjdpxw.css';

const viewBox = {"width":122.5,"height":122.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmakjdpxw"/>`,
		"fallback": "thesvg-color:kubevela-dark",
	});
}

export default Component;
