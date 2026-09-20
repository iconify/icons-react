import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn2855mwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn2855mwp"/>`,
		"fallback": "majesticons:leaf-3-angled-line",
	});
}

export default Component;
