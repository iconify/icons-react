import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhla2-b5p.css';
import '../../css/r/r2gwrbc_m.css';
import '../../css/o/olx8frbln.css';
import '../../css/p/p-0gvwbqy.css';
import '../../css/d/dr--31bsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhla2-b5p"/><path class="r2gwrbc_m"/><path class="olx8frbln"/><path class="p-0gvwbqy"/><path class="dr--31bsb"/>`,
		"fallback": "streamline-emojis:musical-score",
	});
}

export default Component;
