import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcn2q1bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcn2q1bcp"/>`,
		"fallback": "gcp:migrate-for-anthos",
	});
}

export default Component;
