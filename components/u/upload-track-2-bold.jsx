import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z09gg-b_z.css';
import '../../css/y/yncnjebzq.css';
import '../../css/w/woxdewbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z09gg-b_z"/><path class="yncnjebzq"/><path clip-rule="evenodd" class="woxdewbog"/>`,
		"fallback": "solar:upload-track-2-bold",
	});
}

export default Component;
