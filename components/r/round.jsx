import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvpnn-2xb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dvpnn-2xb"/>`,
		"fallback": "icon-park-outline:round",
	});
}

export default Component;
