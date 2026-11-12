import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgq1-nb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgq1-nb2i"/>`,
		"fallback": "tabler:shield-flame",
	});
}

export default Component;
