import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u86-pacbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u86-pacbq"/>`,
		"fallback": "ri:spy-fill",
	});
}

export default Component;
