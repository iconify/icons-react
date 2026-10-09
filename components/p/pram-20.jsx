import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcw6mnbls.css';
import '../../css/m/m8t0x9bfp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcw6mnbls"/><path class="m8t0x9bfp"/>`,
		"fallback": "energy-icons:pram-20",
	});
}

export default Component;
