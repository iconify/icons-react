import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6oo7nb8e.css';
import '../../css/p/phxmbeb9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6oo7nb8e"/><path class="phxmbeb9b"/>`,
		"fallback": "selfhst:pomerium-dark",
	});
}

export default Component;
