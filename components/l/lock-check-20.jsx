import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g--bxo5in.css';
import '../../css/x/xxzut0e2z.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g--bxo5in"/><path class="xxzut0e2z"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:lock-check-20",
	});
}

export default Component;
