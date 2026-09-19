import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4a7kh3gw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4a7kh3gw"/>`,
		"fallback": "ion:md-flash",
	});
}

export default Component;
