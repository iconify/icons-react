import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klfze56cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klfze56cb"/>`,
		"fallback": "ri:table-view",
	});
}

export default Component;
