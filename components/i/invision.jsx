import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpwo_ibfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpwo_ibfb"/>`,
		"fallback": "ci:invision",
	});
}

export default Component;
