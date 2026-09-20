import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn0sz_55w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yn0sz_55w"/>`,
		"fallback": "ix:plant-details",
	});
}

export default Component;
