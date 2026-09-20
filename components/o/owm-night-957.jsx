import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqzaw57ol.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqzaw57ol"/>`,
		"fallback": "wi:owm-night-957",
	});
}

export default Component;
