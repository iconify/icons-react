import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot1fkivfi.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot1fkivfi"/>`,
		"fallback": "vs:stroller",
	});
}

export default Component;
