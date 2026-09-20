import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncqj-0diq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncqj-0diq"/>`,
		"fallback": "tabler:navigation-dollar",
	});
}

export default Component;
