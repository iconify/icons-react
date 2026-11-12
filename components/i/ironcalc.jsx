import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugrv1ixqz.css';
import '../../css/y/ylok2ab9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugrv1ixqz"/><path class="ylok2ab9i"/>`,
		"fallback": "selfhst:ironcalc",
	});
}

export default Component;
