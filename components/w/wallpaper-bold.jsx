import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-r16bpz.css';
import '../../css/c/c0abhhbxc.css';
import '../../css/b/bu3d-6cof.css';
import '../../css/x/xnmzdybto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4-r16bpz"/><path class="c0abhhbxc"/><path class="bu3d-6cof"/><path clip-rule="evenodd" class="xnmzdybto"/>`,
		"fallback": "solar:wallpaper-bold",
	});
}

export default Component;
