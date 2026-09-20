import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8chphb8w.css';
import '../../css/k/kpuc3bbvl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8chphb8w"/><path clip-rule="evenodd" class="kpuc3bbvl"/>`,
		"fallback": "qlementine-icons:select-all-16",
	});
}

export default Component;
