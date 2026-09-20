import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvn2jqbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvn2jqbmx"/>`,
		"fallback": "nrk:media-agelimit-15",
	});
}

export default Component;
