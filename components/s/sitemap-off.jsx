import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr5g377_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr5g377_p"/>`,
		"fallback": "tabler:sitemap-off",
	});
}

export default Component;
