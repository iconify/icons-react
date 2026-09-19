import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um2e2-7hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um2e2-7hb"/>`,
		"fallback": "gridicons:types",
	});
}

export default Component;
