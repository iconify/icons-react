import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g21besblw.css';
import '../../css/f/fm77d8b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g21besblw"/><path class="fm77d8b-w"/>`,
		"fallback": "token:vix",
	});
}

export default Component;
