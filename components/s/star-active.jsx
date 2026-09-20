import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym-4rinff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym-4rinff"/>`,
		"fallback": "nrk:star-active",
	});
}

export default Component;
