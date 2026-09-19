import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvdr71a1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvdr71a1a"/>`,
		"fallback": "griddy-icons:search-check",
	});
}

export default Component;
