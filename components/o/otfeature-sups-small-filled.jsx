import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1yrw_kmb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1yrw_kmb"/>`,
		"fallback": "dinkie-icons:otfeature-sups-small-filled",
	});
}

export default Component;
