import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgkv1oedz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgkv1oedz"/>`,
		"fallback": "nrk:list-bullet-expressive",
	});
}

export default Component;
