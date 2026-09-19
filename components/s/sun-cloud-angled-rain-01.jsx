import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vfyggb5pi.css';
import '../../css/i/iox6mb34c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vfyggb5pi"/><path class="iox6mb34c"/></g>`,
		"fallback": "hugeicons:sun-cloud-angled-rain-01",
	});
}

export default Component;
