import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhgab4ban.css';

const viewBox = {"width":832,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhgab4ban"/>`,
		"fallback": "fa:star-half",
	});
}

export default Component;
