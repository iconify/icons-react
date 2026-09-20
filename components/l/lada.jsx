import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq2_cn6qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq2_cn6qe"/>`,
		"fallback": "simple-icons:lada",
	});
}

export default Component;
