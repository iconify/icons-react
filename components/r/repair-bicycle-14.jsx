import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3sj0qb7y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3sj0qb7y"/>`,
		"fallback": "osmic:repair-bicycle-14",
	});
}

export default Component;
