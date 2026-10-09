import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rydoqccdc.css';
import '../../css/m/mdfd3zbon.css';
import '../../css/z/z_kowcmek.css';
import '../../css/k/kldwy1z4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rydoqccdc"/><path class="mdfd3zbon"/><path class="z_kowcmek"/><path class="kldwy1z4l"/>`,
		"fallback": "energy-icons:investment-20",
	});
}

export default Component;
