import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x50dklg_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x50dklg_s"/>`,
		"fallback": "lsicon:vip-outline",
	});
}

export default Component;
