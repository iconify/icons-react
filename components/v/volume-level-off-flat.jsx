import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk5l7cbkd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kk5l7cbkd"/>`,
		"fallback": "streamline-color:volume-level-off-flat",
	});
}

export default Component;
