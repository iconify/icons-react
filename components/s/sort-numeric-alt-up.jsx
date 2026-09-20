import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfd9koo4a.css';
import '../../css/v/vl8d-nbty.css';
import '../../css/s/shthbcb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfd9koo4a"/><path class="vl8d-nbty"/><path class="shthbcb5z"/>`,
		"fallback": "prime:sort-numeric-alt-up",
	});
}

export default Component;
