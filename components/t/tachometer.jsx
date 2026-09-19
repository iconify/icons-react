import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so0pblg-n.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so0pblg-n"/>`,
		"fallback": "fa:tachometer",
	});
}

export default Component;
