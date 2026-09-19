import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzky99b_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzky99b_r"/>`,
		"fallback": "icon-park-outline:paragraph-unfold",
	});
}

export default Component;
