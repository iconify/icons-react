import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6xx492kn.css';
import '../../css/x/xlyqlub7x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6xx492kn"/><path class="xlyqlub7x"/>`,
		"fallback": "energy-icons:spillway-20",
	});
}

export default Component;
