import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl4lbdb9f.css';
import '../../css/g/g1x_1bbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl4lbdb9f"/><path class="g1x_1bbut"/>`,
		"fallback": "solar:logout-outline",
	});
}

export default Component;
