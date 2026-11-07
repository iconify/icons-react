import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4x-dibbg.css';
import '../../css/p/pjg7f5xap.css';
import '../../css/q/qz1qozbrv.css';
import '../../css/u/uomfvrbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4x-dibbg"/><path clip-rule="evenodd" class="pjg7f5xap"/><path class="qz1qozbrv"/><path class="uomfvrbmu"/>`,
		"fallback": "solar:music-note-slider-bold",
	});
}

export default Component;
