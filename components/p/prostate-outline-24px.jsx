import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p766x0cdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p766x0cdu"/>`,
		"fallback": "healthicons:prostate-outline-24px",
	});
}

export default Component;
