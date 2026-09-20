import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhs1vzpxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hhs1vzpxb"/>`,
		"fallback": "streamline-sharp:leaf-remix",
	});
}

export default Component;
