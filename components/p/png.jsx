import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfh65chdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfh65chdf"/>`,
		"fallback": "griddy-icons:png",
	});
}

export default Component;
