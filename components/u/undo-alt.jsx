import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgc2aw0_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgc2aw0_a"/>`,
		"fallback": "fa-solid:undo-alt",
	});
}

export default Component;
