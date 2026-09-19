import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwohe441b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwohe441b"/>`,
		"fallback": "boxicons:table-columns",
	});
}

export default Component;
