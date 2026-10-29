import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id2r6acek.css';
import '../../css/h/hhl9zwbmk.css';
import '../../css/w/w-3ivgtla.css';
import '../../css/e/eescw1b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id2r6acek wm-a"/><path class="hhl9zwbmk wm-k"/><path class="w-3ivgtla wm-k"/><path class="eescw1b9v wm-a"/>`,
		"fallback": "withicons-bauhaus:timer",
	});
}

export default Component;
