import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq9sw1b5k.css';

const viewBox = {"width":432,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq9sw1b5k"/>`,
		"fallback": "ps:myspace-alt",
	});
}

export default Component;
