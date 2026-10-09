import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8vhyqvci.css';
import '../../css/f/f8cnuqbvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8vhyqvci"/><path class="f8cnuqbvs"/>`,
		"fallback": "energy-icons:rotate-ccw-20",
	});
}

export default Component;
