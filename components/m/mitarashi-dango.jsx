import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk6pn-bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk6pn-bph"/>`,
		"fallback": "fe:mitarashi-dango",
	});
}

export default Component;
