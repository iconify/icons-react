import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/k/kenq7me_r.css';
import '../../css/n/nyk3gvctb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="kenq7me_r"/><path class="nyk3gvctb"/>`,
		"fallback": "solar:move-circle-bold-duotone",
	});
}

export default Component;
