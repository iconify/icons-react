import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3wdbkblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3wdbkblx"/>`,
		"fallback": "icon-park:up-one",
	});
}

export default Component;
