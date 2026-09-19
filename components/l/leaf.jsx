import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgmc37r6s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgmc37r6s"/>`,
		"fallback": "entypo:leaf",
	});
}

export default Component;
