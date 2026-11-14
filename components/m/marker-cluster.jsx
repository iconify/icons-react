import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7-rtbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7-rtbjy"/>`,
		"fallback": "evicons:marker-cluster",
	});
}

export default Component;
