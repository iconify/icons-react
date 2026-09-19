import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_ncr1bti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_ncr1bti"/>`,
		"fallback": "icomoon-free:spinner6",
	});
}

export default Component;
