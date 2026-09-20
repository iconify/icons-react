import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgn95k0qb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgn95k0qb"/>`,
		"fallback": "streamline-plump:thermometer-remix",
	});
}

export default Component;
