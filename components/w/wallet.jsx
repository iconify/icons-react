import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dute4tn_a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dute4tn_a"/>`,
		"fallback": "simple-line-icons:wallet",
	});
}

export default Component;
