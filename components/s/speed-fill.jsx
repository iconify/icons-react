import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvq-sy4sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvq-sy4sc"/>`,
		"fallback": "ri:speed-fill",
	});
}

export default Component;
