import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6ofuubxb.css';
import '../../css/a/aw4zs_blx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6ofuubxb"/><path class="aw4zs_blx"/>`,
		"fallback": "energy-icons:letter-case-20-bold",
	});
}

export default Component;
