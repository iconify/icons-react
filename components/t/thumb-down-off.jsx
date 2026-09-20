import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kge1oi_wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kge1oi_wi"/>`,
		"fallback": "tabler:thumb-down-off",
	});
}

export default Component;
