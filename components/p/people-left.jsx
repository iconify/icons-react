import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6okt_aby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6okt_aby"/>`,
		"fallback": "icon-park-outline:people-left",
	});
}

export default Component;
