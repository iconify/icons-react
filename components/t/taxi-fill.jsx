import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpmgu3bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpmgu3bgq"/>`,
		"fallback": "ri:taxi-fill",
	});
}

export default Component;
