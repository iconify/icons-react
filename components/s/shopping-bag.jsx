import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk2o14bhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk2o14bhx"/>`,
		"fallback": "entypo:shopping-bag",
	});
}

export default Component;
