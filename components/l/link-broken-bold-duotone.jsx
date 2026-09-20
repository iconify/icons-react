import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvj8odlbj.css';
import '../../css/i/iw1lz7bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvj8odlbj"/><path class="iw1lz7bgf"/>`,
		"fallback": "solar:link-broken-bold-duotone",
	});
}

export default Component;
