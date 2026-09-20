import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue86ivb3k.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue86ivb3k"/>`,
		"fallback": "wi:owm-night-701",
	});
}

export default Component;
