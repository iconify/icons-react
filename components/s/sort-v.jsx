import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pueogv6az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pueogv6az"/>`,
		"fallback": "reicon:sort-v",
	});
}

export default Component;
