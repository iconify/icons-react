import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8hjs2bmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8hjs2bmw"/>`,
		"fallback": "icon-park-solid:sum",
	});
}

export default Component;
