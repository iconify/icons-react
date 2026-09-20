import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka1pqbc-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka1pqbc-w"/>`,
		"fallback": "tabler:number-63-small",
	});
}

export default Component;
