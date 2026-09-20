import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqwdy-btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqwdy-btf"/>`,
		"fallback": "solar:paperclip-broken",
	});
}

export default Component;
