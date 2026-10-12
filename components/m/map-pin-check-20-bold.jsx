import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drbsluqal.css';
import '../../css/q/q5hhuwpif.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drbsluqal"/><path class="q5hhuwpif"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:map-pin-check-20-bold",
	});
}

export default Component;
