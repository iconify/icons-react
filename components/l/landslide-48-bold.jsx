import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc_i6bbxk.css';
import '../../css/f/fw2t25bwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc_i6bbxk"/><path class="fw2t25bwb"/>`,
		"fallback": "energy-icons:landslide-48-bold",
	});
}

export default Component;
