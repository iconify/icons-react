import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcnii5bpg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcnii5bpg"/>`,
		"fallback": "pinhead:manhole-cover-with-bolt",
	});
}

export default Component;
