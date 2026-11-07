import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqc3njjlu.css';
import '../../css/s/skij5-7yd.css';
import '../../css/d/d03fu6wuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqc3njjlu"/><path clip-rule="evenodd" class="skij5-7yd"/><path class="d03fu6wuk"/>`,
		"fallback": "solar:turntable-music-note-bold-duotone",
	});
}

export default Component;
