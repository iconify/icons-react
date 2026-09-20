import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk1wv5bck.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk1wv5bck"/>`,
		"fallback": "pinhead:seaplane-ascending-above-water",
	});
}

export default Component;
