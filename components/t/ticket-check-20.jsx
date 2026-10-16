import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl41xxbat.css';
import '../../css/j/jeuojelkk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl41xxbat"/><path class="jeuojelkk"/>`,
		"fallback": "energy-icons:ticket-check-20",
	});
}

export default Component;
