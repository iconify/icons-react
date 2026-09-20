import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_nde8b2s.css';
import '../../css/f/f0yq_obue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_nde8b2s"/><path class="f0yq_obue"/>`,
		"fallback": "mingcute:medium-line",
	});
}

export default Component;
