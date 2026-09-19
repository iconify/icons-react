import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgwaxk78b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgwaxk78b"/>`,
		"fallback": "icon-park:pin",
	});
}

export default Component;
