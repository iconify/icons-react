import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq5aii1hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq5aii1hg"/>`,
		"fallback": "tabler:topology-star-ring-2",
	});
}

export default Component;
