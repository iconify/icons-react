import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shfq65bhq.css';
import '../../css/p/puz5jibvr.css';
import '../../css/p/pjw9-5bis.css';
import '../../css/v/vvpeo-3dh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shfq65bhq"/><path class="puz5jibvr"/><path class="pjw9-5bis"/><path class="vvpeo-3dh"/>`,
		"fallback": "energy-icons:star-plus-20",
	});
}

export default Component;
