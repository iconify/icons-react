import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpxqq0h_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpxqq0h_d"/>`,
		"fallback": "icon-park-outline:sort-two",
	});
}

export default Component;
