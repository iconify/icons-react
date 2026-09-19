import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4sbyjb0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4sbyjb0b"/>`,
		"fallback": "icon-park-outline:movie-board",
	});
}

export default Component;
