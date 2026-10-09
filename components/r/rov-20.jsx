import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzd46y33w.css';
import '../../css/t/t2f8pkdzv.css';
import '../../css/r/r7o-yybha.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzd46y33w"/><path class="t2f8pkdzv"/><path class="r7o-yybha"/>`,
		"fallback": "energy-icons:rov-20",
	});
}

export default Component;
